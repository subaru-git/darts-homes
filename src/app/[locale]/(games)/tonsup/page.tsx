import Main from '@/containers/TonsUp/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.tonsup' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/tonsup`);
};

const TonsUp = () => {
  return <Main />;
};

export default TonsUp;
