import Main from '@/containers/CountUp/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.countup' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/countup`);
};

const CountUp = () => {
  return <Main />;
};

export default CountUp;
