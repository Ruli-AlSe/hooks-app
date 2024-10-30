export type TodosState = {
  id: number;
  description: string;
  done: boolean;
};

type TodoAction = {
  type: string;
  payload: TodosState;
};

export const initialState: TodosState[] = [
  {
    id: new Date().getTime(),
    description: 'Get gem of soul',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Get gem of power',
    done: false,
  },
];

export const todoReducer = (initialState: TodosState[], action: TodoAction) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};
