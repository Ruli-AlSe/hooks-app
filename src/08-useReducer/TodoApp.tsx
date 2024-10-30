import { useEffect, useReducer } from 'react';
import { todoReducer, initialState, TodosState } from './todoReducer';
import { TodoList } from '../components/TodoList';
import { TodoAdd } from '../components/TodoAdd';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')!) || [];
};

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
