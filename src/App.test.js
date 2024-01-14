import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const usernameLabel = screen.getByText(/username/i);
  const passwordLabel = screen.getByText(/password/i);
  const loginButton = screen.getByText(/login/i);

  expect(usernameLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
