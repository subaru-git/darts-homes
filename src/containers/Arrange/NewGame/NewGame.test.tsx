import NewGame from './NewGame';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onNewGameMock = jest.fn();
  const { container } = render(
    <NewGame
      onNewGame={onNewGameMock}
      currentSettings={{ range: 0, out: 'double', simulation: true, separate: false }}
    />,
  );
  expect(container).toMatchSnapshot();
});
