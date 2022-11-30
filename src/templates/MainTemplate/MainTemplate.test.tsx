import MainTemplate from './MainTemplate';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<MainTemplate label='' />);
  expect(container).toMatchSnapshot();
});
