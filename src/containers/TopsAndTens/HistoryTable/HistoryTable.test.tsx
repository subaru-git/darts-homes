import HistoryTable from './HistoryTable';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<HistoryTable history={[]} />);
  expect(container).toMatchSnapshot();
});
