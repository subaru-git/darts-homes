import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import CricketMarkUpHistoryTable from './DoubleTroubleHistoryTable';

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <CricketMarkUpHistoryTable history={[]} />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
