import Main from '@/containers/TermsOfService/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.termsofservice' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/termsofservice`,
  );
};

const TermsOfService = () => {
  return <Main />;
};

export default TermsOfService;
