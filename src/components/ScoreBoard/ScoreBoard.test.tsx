import ScoreBoard from './ScoreBoard';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<ScoreBoard data={[]} />);
  expect(container).toMatchSnapshot();
});
