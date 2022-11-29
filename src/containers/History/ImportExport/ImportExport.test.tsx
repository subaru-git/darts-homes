import ImportExport from './ImportExport';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onErrorMock = jest.fn();
  const { container } = render(<ImportExport onError={onErrorMock} />);
  expect(container).toMatchSnapshot();
});
