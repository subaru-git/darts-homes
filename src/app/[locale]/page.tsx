import Main from '@/containers/Home/Main';
import { url } from 'inspector';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.default' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      images: [{ url: 'https://darts.homes/ogp.png', width: 800, height: 600, alt: 'Darts Homes' }],
    },
    canonical: 'https://darts.homes',
  };
};

const Home = () => {
  return <Main />;
};

export default Home;
