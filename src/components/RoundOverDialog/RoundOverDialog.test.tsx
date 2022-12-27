import { render, screen } from '@testing-library/react';
import RoundOverDialog from './RoundOverDialog';

test('should rendering', () => {
  const onCloseMock = jest.fn();
  const onNewGameMock = jest.fn();
  const { container } = render(<RoundOverDialog isOpen={true} result={'Result'} onClose={onCloseMock} onNewGame={onNewGameMock} />);
  expect(screen.getAllByText('Result')).toHaveLength(1);

  expect(container).toMatchSnapshot();
});
