import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import NewGame from './NewGame';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const onNewGameMock = jest.fn();
  const { container } = render(
    <ChakraProvider>
      <NewGame onNewGame={onNewGameMock} isFinished={false} />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
