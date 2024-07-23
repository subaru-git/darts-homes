import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { GoogleAnalytics } from '@next/third-parties/google';
import '../globals.css';
import Providers from '@/components/Providers';

const LocaleLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''} />
      <body className='min-h-[calc(100dvh-320px)] md:min-h-[calc(100vh-208px)]'>
        <Providers>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
