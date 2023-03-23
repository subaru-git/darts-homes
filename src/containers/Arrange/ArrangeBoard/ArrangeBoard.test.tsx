import ArrangeBoard from './ArrangeBoard';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onCountMock = jest.fn();
  const { container } = render(<ArrangeBoard onCount={onCountMock} range={{ x: 44, y: 44 }} roundVectors={[]} />);
  expect(container).toMatchSnapshot();
});
