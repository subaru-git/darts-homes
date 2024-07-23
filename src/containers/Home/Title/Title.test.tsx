import Title from './Title';
import { render } from '@/lib/TestUtils/RenderMock';

jest.mock('next/navigation');

test('should rendering', () => {
  const { container } = render(<Title />);
  expect(container).toMatchSnapshot();
});
