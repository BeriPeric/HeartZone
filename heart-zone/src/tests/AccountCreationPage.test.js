import { render, screen } from '@testing-library/react';
import AccountCreationPage from '../dirs/AccountCreationPage/AccountCreationPage';

test('renders learn react link', () => {
  render(<AccountCreationPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
