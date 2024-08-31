import Main from '@/containers/CountDrill/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.countdrill' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/countdrill`);
};

const ArrangeRecord = () => {
  return <Main />;
};

export default ArrangeRecord;
