import { useEffect, useReducer } from 'react';
import { initialState, todoReducer, TodosState } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')!) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    [todos];
  });

  const handleNewTodo = (todo: TodosState) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveTodo = (todo: TodosState) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (todo: TodosState) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: todo,
    };

    dispatch(action);
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
