import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewGameModal from './NewGameModal';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const mockOnNewGame = jest.fn();
  const { container } = render(
    <ChakraProvider>
      <NewGameModal onNewGame={mockOnNewGame} isFinished={false} settings={<></>} />
    </ChakraProvider>,
  );
  fireEvent.click(screen.getByText('New Game'));
  fireEvent.click(screen.getAllByText('New Game')[1]);
  expect(mockOnNewGame).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});
