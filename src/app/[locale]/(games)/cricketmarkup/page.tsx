import Main from '@/containers/CricketMarkUp/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.cricketmarkup' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/cricketmarkup`,
  );
};

const CricketMarkUp = () => {
  return <Main />;
};

export default CricketMarkUp;
