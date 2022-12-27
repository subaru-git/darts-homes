import { fireEvent, render, screen } from '@testing-library/react';
import Players from './Players';

test('should rendering', () => {
  const updateName = jest.fn();
  const { container } = render(<Players players={['Player1', 'Player2']} onUpdateName={updateName} />);
  expect(screen.getAllByText('Player1')).toHaveLength(1);
  expect(screen.getAllByText('Player2')).toHaveLength(1);
  fireEvent.change(screen.getByDisplayValue('Player1'), {
    target: { value: 'Player3' },
  });
  expect(updateName).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});
