import Main from '@/containers/PrivacyPolicy/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.privacypolicy' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/privacypolicy`,
  );
};

const PrivacyPolicy = () => {
  return <Main />;
};

export default PrivacyPolicy;
