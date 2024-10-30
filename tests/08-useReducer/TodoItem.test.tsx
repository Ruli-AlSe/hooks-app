import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/components/TodoItem';

describe('Tests in TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Soul gem',
    done: false,
  };
  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should show the todo pending to complete', () => {
    render(
      <TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByText(todo.description);
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should show the todo completed', () => {
    todo.done = true;

    render(
      <TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />
    );

    const spanElement = screen.getByText(todo.description);
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should call onToggleTodo when clicking the todo description', () => {
    render(
      <TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />
    );

    const spanElement = screen.getByText(todo.description);
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
  });

  test('should call onRemoveTodo when clicking the remove button', () => {
    render(
      <TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock} />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
    expect(onRemoveTodoMock).toHaveBeenCalledTimes(1);
  });
});
