import { render, screen } from '@testing-library/react';
import ProfileView from './ProfileView';

test('renders learn react link', () => {
  render(<ProfileView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
