export type TodosState = {
  id: number;
  description: string;
  done: boolean;
};

type TodoAction = {
  type: string;
  payload: TodosState;
};

export const initialState: TodosState[] = [];

export const todoReducer = (initialState: TodosState[], action: TodoAction) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];
    case '[TODO] Remove Todo':
      return initialState.filter((todo) => todo.id !== action.payload.id);
    case '[TODO] Toggle Todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
