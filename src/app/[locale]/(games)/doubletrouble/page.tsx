import Main from '@/containers/DoubleTrouble/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.doubletrouble' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/doubletrouble`,
  );
};

const DoubleTrouble = () => {
  return <Main />;
};

export default DoubleTrouble;
