import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { createMatchMedia } from '../../../lib/TestUtils/MatchMediaMock';
import Description from './Description';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <Description />
    </ChakraProvider>,
  );
  expect(screen.getByAltText('description image')).not.toBeNull();
  expect(container).toMatchSnapshot();
});
