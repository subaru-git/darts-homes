import RoundDisplay from './RoundDisplay';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<RoundDisplay />);
  expect(container).toMatchSnapshot();
});
