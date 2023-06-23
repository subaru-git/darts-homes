import Button from './CheckButton';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
