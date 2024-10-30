import { TodosState } from '../08-useReducer/todoReducer';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }: { handleNewTodo: (todo: TodosState) => void }) => {
  const {
    formState: { description },
    onInputChange,
    onResetForm,
  } = useForm({
    description: '',
  });

  const onNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ((description as string).length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: String(description),
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onNewTodo}>
      <input
        type="text"
        placeholder="what to do?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Add
      </button>
    </form>
  );
};
