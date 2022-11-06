import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import HistoryTable from './HistoryTable';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <HistoryTable history={[]} />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
