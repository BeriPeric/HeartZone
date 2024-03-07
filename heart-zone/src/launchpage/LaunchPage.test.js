import { render, screen } from '@testing-library/react';
import LaunchPage from './LaunchPage';

test('renders learn react link', () => {
  render(<LaunchPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
