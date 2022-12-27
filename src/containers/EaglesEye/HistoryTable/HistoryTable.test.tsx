import HistoryTable from './HistoryTable';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<HistoryTable history={[]} user={null} />);
  expect(container).toMatchSnapshot();
});
