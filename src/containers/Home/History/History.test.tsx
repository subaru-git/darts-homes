import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { createMatchMedia } from '../../../lib/TestUtils/MatchMediaMock';
import History from './History';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <History />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
