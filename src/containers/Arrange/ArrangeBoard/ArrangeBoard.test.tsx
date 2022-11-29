import ArrangeBoard from './ArrangeBoard';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onCountMock = jest.fn();
  const { container } = render(<ArrangeBoard onCount={onCountMock} range={44} />);
  expect(container).toMatchSnapshot();
});
