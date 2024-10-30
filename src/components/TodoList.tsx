import { TodosState } from '../08-useReducer/todoReducer';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] }: { todos: TodosState[] }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
