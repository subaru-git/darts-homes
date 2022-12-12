import UserMenu from './UserMenu';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<UserMenu />);
  expect(container).toMatchSnapshot();
});
