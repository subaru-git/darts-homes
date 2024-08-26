import Main from '@/containers/ShanghaiNights/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.shanghainights' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/shanghainights`,
  );
};

const ShanghaiNights = () => {
  return <Main />;
};

export default ShanghaiNights;
