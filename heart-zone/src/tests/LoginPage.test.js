import { render, screen } from '@testing-library/react';
import LoginPage from '../dirs/LoginPage/LoginPage';

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
