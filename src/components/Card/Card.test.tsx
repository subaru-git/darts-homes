import { render } from '@testing-library/react';
import Card from './Card';

test('should rendering', () => {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});
