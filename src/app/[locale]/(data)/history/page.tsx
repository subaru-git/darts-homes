import Main from '@/containers/History/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.history' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/history`);
};

const History = () => {
  return <Main />;
};

export default History;
