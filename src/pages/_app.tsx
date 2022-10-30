import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { CricketMarkUpGameContextProvider } from '@/contexts/CricketMarkUpGameContext'
import { EaglesEyeUpGameContextProvider } from '@/contexts/EaglesEyeGameContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        defaultTitle='Darts Games'
        description='ダーツ練習のソロゲームがあります。'
        twitter={{ cardType: 'summary' }}
        openGraph={{
          type: 'website',
          title: 'Darts Games',
          description: 'ダーツ練習のソロゲームがあります。',
          site_name: 'Darts Games',
          images: [
            {
              url: 'https://darts-games.vercel.app/ogp.png',
              width: 800,
              height: 600,
            },
          ],
        }}
      />
      <ChakraProvider>
        <CricketMarkUpGameContextProvider>
          <EaglesEyeUpGameContextProvider>
            <Global styles={{ body: { minHeight: 'calc(100vh - 24px)' } }} />
            <Component {...pageProps} />
          </EaglesEyeUpGameContextProvider>
        </CricketMarkUpGameContextProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
