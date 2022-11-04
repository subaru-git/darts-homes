import { ChakraProvider } from '@chakra-ui/react';
import { render, waitFor } from '@testing-library/react';
import Board from './Board';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', async () => {
  const { container } = render(
    <ChakraProvider>
      <Board />
    </ChakraProvider>,
  );
  await waitFor(() => expect(container).toMatchSnapshot());
});
