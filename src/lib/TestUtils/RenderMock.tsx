import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { render as defaultRender } from '@testing-library/react';
import Providers from '@/contexts/Providers';
import { NextIntlClientProvider } from 'next-intl';

export const render = (children: ReactNode | ReactNode[]) => {
  const messages = require('@/locales/en.json');
  return defaultRender(
    <ChakraProvider>
      <NextIntlClientProvider messages={messages} locale='en'>
        <Providers>{children}</Providers>
      </NextIntlClientProvider>
    </ChakraProvider>,
  );
};
