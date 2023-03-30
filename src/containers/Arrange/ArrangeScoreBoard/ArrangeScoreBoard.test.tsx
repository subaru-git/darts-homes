import ArrangeScoreBoard from './ArrangeScoreBoard';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<ArrangeScoreBoard score={[]} />);
  expect(container).toMatchSnapshot();
});
