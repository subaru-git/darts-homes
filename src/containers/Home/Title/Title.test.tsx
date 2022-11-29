import Title from './Title';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Title />);
  expect(container).toMatchSnapshot();
});
