import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'ruli-alse',
    email: 'ra.almanzaserrano@gmail.com',
  });
  const { username, email } = formState;

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, [formState]);

  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@domain.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'ruli-alse2' && <Message />}
    </>
  );
};
