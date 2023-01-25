import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('should rendering', () => {
  const { container } = render(<Footer />);
  expect(screen.getAllByText('(c) 2023 darts homes')).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
