import { render, screen } from '@testing-library/react';
import ProfileCreation from '../dirs/MainMatching/MainMatching';

test('renders learn react link', () => {
  render(<ProfileCreation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
