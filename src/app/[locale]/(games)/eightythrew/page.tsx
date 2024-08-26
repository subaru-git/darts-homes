import Main from '@/containers/EightyThrew/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.eightythrew' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/eightythrew`,
  );
};

const EightyThrew = () => {
  return <Main />;
};

export default EightyThrew;
