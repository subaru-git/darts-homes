import Respect from './Respect';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Respect />);
  expect(container.getElementsByClassName('YouTube')).not.toBeNull();
  expect(container).toMatchSnapshot();
});
