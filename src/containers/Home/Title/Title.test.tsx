import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import Title from './Title';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <Title />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
