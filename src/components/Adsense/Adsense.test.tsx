import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import Adsense from './Adsense';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
test('should rendering', () => {
  const { container } = render(
    <ChakraProvider>
      <Adsense />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
