import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { createMatchMedia } from '../../../lib/TestUtils/MatchMediaMock';
import Board from './Board';

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1000);
  const { container } = render(
    <ChakraProvider>
      <Board scores={[{ number: 20, count: 10, total: 5 }]} />
    </ChakraProvider>,
  );
  expect(screen.getAllByText('20')).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
