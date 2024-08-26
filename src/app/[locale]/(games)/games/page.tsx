import Main from '@/containers/Games/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.games' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/games`);
};

const Games = () => {
  return <Main />;
};

export default Games;
