import History from './History';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<History />);
  expect(container).toMatchSnapshot();
});
