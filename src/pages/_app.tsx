import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import AppDefaultSeo from '@/components/AppDefaultSeo';
import Providers from '@/contexts/Providers';
import '../styles/globals.css';
import { useBreakpoint } from '@/hooks/tailwind';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isMd = useBreakpoint('md');
  const minHeight = isMd ? 'calc(100vh - 208px)' : 'calc(100vh - 320px)';
  return (
    <>
      <AppDefaultSeo />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
      <ChakraProvider>
        <Providers>
          <Global styles={{ body: { minHeight } }} />
          <Component {...pageProps} />
        </Providers>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
