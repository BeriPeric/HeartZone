import { render, screen } from '@testing-library/react';
import ProfileCreation from './Chats';

test('renders learn react link', () => {
  render(<ProfileCreation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
