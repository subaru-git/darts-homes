import RoundDisplay from './RoundDisplay';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<RoundDisplay count={0} />);
  expect(container).toMatchSnapshot();
});
