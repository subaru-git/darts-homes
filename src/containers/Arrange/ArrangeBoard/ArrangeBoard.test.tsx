import { render } from '@testing-library/react';
import ArrangeBoard from './ArrangeBoard';

test('should rendering', () => {
  const { container } = render(<ArrangeBoard />);
  expect(container).toMatchSnapshot();
});
