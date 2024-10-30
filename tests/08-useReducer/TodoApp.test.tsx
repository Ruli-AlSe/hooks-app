import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Tests in TodoApp', () => {
  (useTodos as jest.Mock).mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Todo #1',
        done: false,
      },
      {
        id: 2,
        description: 'Todo #2',
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 2,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('should show the component correctly', () => {
    render(<TodoApp />);

    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
