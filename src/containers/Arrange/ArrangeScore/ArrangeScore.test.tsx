import ArrangeScore from './ArrangeScore';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<ArrangeScore score={'271'} round={'351'} />);
  expect(container).toMatchSnapshot();
});
