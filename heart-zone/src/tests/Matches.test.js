import { render, screen } from '@testing-library/react';
import Matches from '../dirs/Matches/Matches';

test('renders learn react link', () => {
  render(<Matches />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
