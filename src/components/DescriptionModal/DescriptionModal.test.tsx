import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import DescriptionModal from './DescriptionModal';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <DescriptionModal header='' description={<></>} />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
