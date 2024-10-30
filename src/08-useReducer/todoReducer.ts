export type TodosState = {
  id: number;
  description: string;
  done: boolean;
};

export type TodoAction = {
  type: string;
  payload: TodosState | number;
};

export const initialState: TodosState[] = [];

export const todoReducer = (initialState: TodosState[], action: TodoAction): TodosState[] => {
  switch (action.type) {
    case '[TODO] Add Todo':
      if (typeof action.payload === 'number') return initialState;

      return [...initialState, action.payload];

    case '[TODO] Remove Todo':
      return initialState.filter((todo) => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
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
