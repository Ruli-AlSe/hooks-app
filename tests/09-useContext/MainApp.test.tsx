import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in MainApp', () => {
  test('should show the home page', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeTruthy();
  });

  test('should show the login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    const loginAnchor = screen.getByRole('link', { name: 'Login' });

    expect(screen.getByText('Login Page')).toBeTruthy();
    expect(loginAnchor.className).toContain('active');
  });

  test('should show the about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    );

    const aboutAnchor = screen.getByRole('link', { name: 'About' });

    expect(screen.getByText('About Page')).toBeTruthy();
    expect(aboutAnchor.className).toContain('active');
  });
});
