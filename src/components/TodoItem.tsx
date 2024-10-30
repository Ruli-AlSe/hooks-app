import { TodosState } from '../08-useReducer/todoReducer';

interface Props {
  todo: TodosState;
  onRemoveTodo: (todo: TodosState) => void;
  onToggleTodo: (todo: TodosState) => void;
}

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo)}>
        Remove
      </button>
    </li>
  );
};
