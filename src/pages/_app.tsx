import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CricketMarkUpGameContextProvider } from '@/contexts/CricketMarkUpGameContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
      </Head>
      <ChakraProvider>
        <CricketMarkUpGameContextProvider>
          <Global styles={{ body: { minHeight: 'calc(100vh - 24px)' } }} />
          <Component {...pageProps} />
        </CricketMarkUpGameContextProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
