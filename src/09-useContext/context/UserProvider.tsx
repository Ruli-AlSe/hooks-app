import { useState } from 'react';
import { User, UserContext } from './UserContext';

// const user = {
//   id: 123,
//   name: 'Raul Almanza',
//   email: 'raul@domain.com',
// };

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
