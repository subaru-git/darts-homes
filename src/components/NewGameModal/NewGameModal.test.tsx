import { fireEvent, screen } from '@testing-library/react';
import NewGameModal from './NewGameModal';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';
import { render } from '@/lib/TestUtils/RenderMock';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const mockOnNewGame = jest.fn();
  const { container } = render(<NewGameModal onNewGame={mockOnNewGame} isFinished={false} settings={<></>} />);
  fireEvent.click(screen.getByText('New Game'));
  fireEvent.click(screen.getAllByText('New Game')[1]);
  expect(mockOnNewGame).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});
