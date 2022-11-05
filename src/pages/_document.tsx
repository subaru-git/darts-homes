import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
          <meta
            name='keywords'
            content='ダーツ,ダーツ練習,ダーツゲーム,自宅ダーツ,darts,ソロダーツ'
          />
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin='anonymous'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
