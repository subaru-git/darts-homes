import Main from '@/containers/TreblesForShow/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.treblesforshow' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/treblesforshow`,
  );
};

const TreblesForShow = () => {
  return <Main />;
};

export default TreblesForShow;
