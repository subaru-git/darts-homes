import Main from '@/containers/Sweet16/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.sweet16' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/sweet16`);
};

const Sweet16 = () => {
  return <Main />;
};

export default Sweet16;
