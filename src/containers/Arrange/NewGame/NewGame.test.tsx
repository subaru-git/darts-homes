import NewGame from './NewGame';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onNewGameMock = jest.fn();
  const { container } = render(<NewGame onNewGame={onNewGameMock} currentSettings={{ range: { x: 0, y: 0 }, out: 'double', simulation: true, separate: false, hard: false, mode: '3-darts', pro: false }} />);
  expect(container).toMatchSnapshot();
});
