import CricketMarkUpHistoryTable from './HistoryTable';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<CricketMarkUpHistoryTable history={[]} />);
  expect(container).toMatchSnapshot();
});
