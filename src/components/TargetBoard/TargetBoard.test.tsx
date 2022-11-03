import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import TargetBoard from './TargetBoard';

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <TargetBoard target='501' message='next target' />
    </ChakraProvider>,
  );
  expect(screen.getAllByText('501')).toHaveLength(1);
  expect(screen.getAllByText('next target')).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
