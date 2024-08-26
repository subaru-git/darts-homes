import Main from '@/containers/TopsAndTens/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.topsandtens' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/topsandtens`,
  );
};

const TopsAndTens = () => {
  return <Main />;
};

export default TopsAndTens;
