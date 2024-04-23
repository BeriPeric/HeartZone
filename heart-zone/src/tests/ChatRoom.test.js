import { render, screen } from '@testing-library/react';
import ChatRoom from './ChatRoom';

test('renders learn react link', () => {
  render(<ChatRoom />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
