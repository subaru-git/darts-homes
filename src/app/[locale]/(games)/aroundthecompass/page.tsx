import Main from '@/containers/AroundTheCompass/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.aroundthecompass' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/aroundthecompass`,
  );
};

const AroundTheCompass = () => {
  return <Main />;
};

export default AroundTheCompass;
