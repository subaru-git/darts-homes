import Main from '@/containers/Route64/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.route64' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/route64`);
};

const Route64 = () => {
  return <Main />;
};

export default Route64;
