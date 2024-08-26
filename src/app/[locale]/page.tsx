import Main from '@/containers/Home/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.default' });
  return createMetadata(t('title'), t('description'), '/');
};

const Home = () => {
  return <Main />;
};

export default Home;
