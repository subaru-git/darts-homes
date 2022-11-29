import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { render as defaultRender } from '@testing-library/react';
import Providers from '@/contexts/Providers';

const render = (children: ReactNode | ReactNode[]) =>
  defaultRender(
    <ChakraProvider>
      <Providers>{children}</Providers>
    </ChakraProvider>,
  );
export { render };
