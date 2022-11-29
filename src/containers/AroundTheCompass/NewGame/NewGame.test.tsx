import NewGame from './NewGame';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onNewGameMock = jest.fn();
  const { container } = render(<NewGame onNewGame={onNewGameMock} currentRound={10} />);
  expect(container).toMatchSnapshot();
});
