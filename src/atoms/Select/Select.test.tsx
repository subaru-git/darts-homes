import Select from './Select';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Select options={['aaa', 'bbb', 'ccc']} />);
  expect(container).toMatchSnapshot();
});
