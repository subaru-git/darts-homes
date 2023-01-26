import Button from './Button';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
