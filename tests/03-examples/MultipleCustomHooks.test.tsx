import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Testing MultipleCustomHooks', () => {
  const pokemonInfo = {
    name: 'Pikachu',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    },
  };
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  (useCounter as jest.Mock).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show default component', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next' }) as HTMLButtonElement;
    const previousButton = screen.getByRole('button', { name: 'Previous' }) as HTMLButtonElement;

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Pokemon information'));
    expect(nextButton.disabled).toBeFalsy();
    expect(previousButton.disabled).toBeFalsy();
  });

  test('should show pokemon information', async () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: pokemonInfo,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const images = screen.getAllByRole('img');

    expect(screen.getByText('#1 - Pikachu'));
    expect(images.length).toBe(4);
  });

  test('should call the increment function', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: pokemonInfo,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next' }) as HTMLButtonElement;
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  test('should not call the decrement function if the counter is 1', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: pokemonInfo,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const previousButton = screen.getByRole('button', { name: 'Previous' }) as HTMLButtonElement;
    fireEvent.click(previousButton);

    expect(mockDecrement).toHaveBeenCalledTimes(0);
  });

  test('should call the decrement function', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: pokemonInfo,
      isLoading: false,
      hasError: null,
    });

    (useCounter as jest.Mock).mockReturnValue({
      counter: 5,
      increment: mockIncrement,
      decrement: mockDecrement,
    });

    render(<MultipleCustomHooks />);
    const previousButton = screen.getByRole('button', { name: 'Previous' }) as HTMLButtonElement;
    fireEvent.click(previousButton);

    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });
});
