import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={{ body: { minHeight: "calc(100vh - 32px)" } }} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
