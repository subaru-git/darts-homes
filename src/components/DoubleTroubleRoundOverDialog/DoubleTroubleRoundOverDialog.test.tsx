import { render } from '@testing-library/react';
import DoubleTroubleRoundOverDialog from './DoubleTroubleRoundOverDialog';

test('should rendering', () => {
  const onCloseMock = jest.fn();
  const onNewGameMock = jest.fn();
  const { container } = render(
    <DoubleTroubleRoundOverDialog isOpen={false} onClose={onCloseMock} onNewGame={onNewGameMock} />,
  );
  expect(container).toMatchSnapshot();
});
