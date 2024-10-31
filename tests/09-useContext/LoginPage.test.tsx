import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Tests in LoginPage', () => {
  const user = {
    id: 123,
    name: 'Raul Almanza',
    email: 'raul@domain.com',
  };

  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: () => {} }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toContain('');
  });

  test('should show the component with the user', () => {
    render(
      <UserContext.Provider value={{ user, setUser: () => {} }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    // expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 3));
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.email);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });

  test('should call setUser when click the button', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const loadUserButton = screen.getByRole('button', { name: 'Set user' });
    fireEvent.click(loadUserButton);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'Roberto Carlos',
      email: 'ro@example.com',
    });
    expect(setUserMock).toHaveBeenCalledTimes(1);
  });
});
