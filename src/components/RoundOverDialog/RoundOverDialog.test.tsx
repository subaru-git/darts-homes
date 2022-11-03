import { render } from '@testing-library/react';
import RoundOverDialog from './RoundOverDialog';

test('should rendering', () => {
  const onCloseMock = jest.fn();
  const onNewGameMock = jest.fn();
  const { container } = render(
    <RoundOverDialog isOpen={false} onClose={onCloseMock} onNewGame={onNewGameMock} />,
  );
  expect(container).toMatchSnapshot();
});
