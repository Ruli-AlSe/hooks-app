import { createContext } from 'react';

export type User = {
  id: number;
  name: string;
  email: string;
};

interface UserContextProps {
  user: User | null;
  setUser: (user: User) => void;
}

export const UserContext = createContext({} as UserContextProps);
