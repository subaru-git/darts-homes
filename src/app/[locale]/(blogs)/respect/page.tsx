import { readFileSync } from 'fs';
import Main from '@/containers/Respect/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.respect' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/respect`);
};

const Respect = () => {
  const data = JSON.parse(readFileSync('data/data.json', 'utf8'));

  return <Main data={data} />;
};

export default Respect;
