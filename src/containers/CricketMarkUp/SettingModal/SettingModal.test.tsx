import { render } from '@testing-library/react';
import SettingModal from './SettingModal';

test('should rendering', () => {
  const onNewGameMock = jest.fn();
  const onCloseMock = jest.fn();
  const { container } = render(
    <SettingModal
      isOpen={false}
      onNewGame={onNewGameMock}
      onClose={onCloseMock}
      targetCount={10}
    />,
  );
  expect(container).toMatchSnapshot();
});
