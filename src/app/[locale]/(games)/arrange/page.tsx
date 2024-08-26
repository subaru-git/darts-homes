import Main from '@/containers/Arrange/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.arrange' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/arrange`);
};

const Arrange = () => {
  return <Main />;
};

export default Arrange;
