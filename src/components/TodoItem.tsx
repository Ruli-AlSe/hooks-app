import { TodosState } from '../08-useReducer/todoReducer';

interface Props {
  todo: TodosState;
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};
