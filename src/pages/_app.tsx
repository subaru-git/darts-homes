import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
      </Head>
      <ChakraProvider>
        <Global styles={{ body: { minHeight: 'calc(100vh - 24px)' } }} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
