import List from './List';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<List />);
  expect(container).toMatchSnapshot();
});
