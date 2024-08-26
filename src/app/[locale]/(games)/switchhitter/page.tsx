import Main from '@/containers/SwitchHitter/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.switchhitter' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/switchhitter`,
  );
};

const SwitchHitter = () => {
  return <Main />;
};

export default SwitchHitter;
