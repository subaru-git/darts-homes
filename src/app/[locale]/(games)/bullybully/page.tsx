import Main from '@/containers/BullyBully/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.bullybully' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/bullybully`);
};

const BullyBully = () => {
  return <Main />;
};

export default BullyBully;
