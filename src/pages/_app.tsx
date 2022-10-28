import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CricketNumberCountGameContextProvider } from '@/contexts/CricketNumberCountGameContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
      </Head>
      <ChakraProvider>
        <CricketNumberCountGameContextProvider>
          <Global styles={{ body: { minHeight: 'calc(100vh - 24px)' } }} />
          <Component {...pageProps} />
        </CricketNumberCountGameContextProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
