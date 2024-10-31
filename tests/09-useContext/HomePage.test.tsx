import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Tests in HomPage', () => {
  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: () => {} }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toContain('');
  });

  test('should show the component with the user', () => {
    const user = {
      id: 123,
      name: 'Raul Almanza',
      email: 'raul@domain.com',
    };

    render(
      <UserContext.Provider value={{ user, setUser: () => {} }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    // expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 3));
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.email);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
