import { render } from '@testing-library/react';
import EaglesEyeRoundOverDialog from './EaglesEyeRoundOverDialog';

test('should rendering', () => {
  const onCloseMock = jest.fn();
  const onNewGameMock = jest.fn();
  const { container } = render(
    <EaglesEyeRoundOverDialog isOpen={false} onClose={onCloseMock} onNewGame={onNewGameMock} />,
  );
  expect(container).toMatchSnapshot();
});
