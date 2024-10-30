import { TodosState } from '../08-useReducer/todoReducer';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  todos = [],
  onRemoveTodo,
}: {
  todos: TodosState[];
  onRemoveTodo: (todo: TodosState) => void;
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};
