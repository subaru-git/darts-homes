import { render } from '@testing-library/react';
import Loading from './Loading';

test('should rendering', () => {
  const { container } = render(<Loading />);
  expect(container).toMatchSnapshot();
});
