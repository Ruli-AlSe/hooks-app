type TodosState = {
  id: number;
  todo: string;
  done: boolean;
};

type ReducerAction = {
  type: string;
  payload: TodosState;
};

const initialState: TodosState[] = [
  {
    id: 1,
    todo: 'Get soul gem',
    done: false,
  },
];

const todoReducer = (state: TodosState[] = initialState, action?: ReducerAction) => {
  if (action && action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Get power gem',
  done: false,
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
