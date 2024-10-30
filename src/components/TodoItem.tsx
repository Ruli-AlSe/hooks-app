import { TodosState } from '../08-useReducer/todoReducer';

export const TodoItem = ({
  todo,
  onRemoveTodo,
}: {
  todo: TodosState;
  onRemoveTodo: (todo: TodosState) => void;
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo)}>
        Remove
      </button>
    </li>
  );
};
