import Disclaimer from './Disclaimer';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Disclaimer />);
  expect(container).toMatchSnapshot();
});
