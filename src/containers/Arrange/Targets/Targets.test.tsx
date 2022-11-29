import Targets from './Targets';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Targets count={8} targets={[]} />);
  expect(container).toMatchSnapshot();
});
