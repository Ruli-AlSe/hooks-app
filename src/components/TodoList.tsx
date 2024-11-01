import { TodosState } from '../08-useReducer/todoReducer';
import { TodoItem } from './TodoItem';

interface Props {
  todos: TodosState[];
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }: Props) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
