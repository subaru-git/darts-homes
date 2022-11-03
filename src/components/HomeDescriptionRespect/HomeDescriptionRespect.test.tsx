import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import HomeDescriptionRespect from './HomeDescriptionRespect';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <HomeDescriptionRespect />
    </ChakraProvider>,
  );
  expect(container.getElementsByClassName('YouTube')).not.toBeNull();
  expect(container).toMatchSnapshot();
});
