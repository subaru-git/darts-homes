---
to: src/containers/<%= name %>/Description/Description.test.tsx
---
import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import Description from './Description';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100);
  const { container } = render(
    <ChakraProvider>
      <Description />
    </ChakraProvider>,
  );
  expect(screen.getByText('What is this game?')).not.toBeNull();
  expect(container).toMatchSnapshot();
});
