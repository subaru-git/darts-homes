import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import CricketMarkUpDescription from './CricketMarkUpDescription';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <CricketMarkUpDescription />
    </ChakraProvider>,
  );
  expect(screen.getByText('What is this game?')).not.toBeNull();
  expect(container).toMatchSnapshot();
});
