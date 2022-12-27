import CricketMarkUpHistoryTable from './HistoryTable';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<CricketMarkUpHistoryTable history={[]} user={null} />);
  expect(container).toMatchSnapshot();
});
