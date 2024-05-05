import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('should rendering', () => {
  const { container } = render(<Footer />);
  expect(screen.getAllByText('Copyright © 2024 Darts Homes')).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
