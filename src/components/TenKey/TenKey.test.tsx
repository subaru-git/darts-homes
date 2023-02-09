import TenKey from './TenKey';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onCountMock = jest.fn();
  const { container } = render(<TenKey onCount={onCountMock} />);
  expect(container).toMatchSnapshot();
});
