import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import DoubleTroubleNewGame from './DoubleTroubleNewGame';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const onNewGameMock = jest.fn();
  const { container } = render(
    <ChakraProvider>
      <DoubleTroubleNewGame onNewGame={onNewGameMock} />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
