import { render } from '@testing-library/react';
import CricketMarkUpSettingModal from './CricketMarkUpSettingModal';

test('should rendering', () => {
  const onNewGameMock = jest.fn();
  const onCloseMock = jest.fn();
  const { container } = render(
    <CricketMarkUpSettingModal
      isOpen={false}
      onNewGame={onNewGameMock}
      onClose={onCloseMock}
      targetCount={10}
    />,
  );
  expect(container).toMatchSnapshot();
});
