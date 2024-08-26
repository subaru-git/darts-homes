import Main from '@/containers/TwoDartCombinations/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.twodartcombinations' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/twodartcombinations`,
  );
};

const TwoDartCombinations = () => {
  return <Main />;
};

export default TwoDartCombinations;
