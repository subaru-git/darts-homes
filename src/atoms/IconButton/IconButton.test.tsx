import IconButton from './IconButton';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<IconButton />);
  expect(container).toMatchSnapshot();
});
