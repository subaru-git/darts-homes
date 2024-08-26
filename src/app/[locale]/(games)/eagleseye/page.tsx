import React from 'react';
import Main from '@/containers/EaglesEye/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.eagleseye' });
  return createMetadata(t('title'), t('description'), `${locale === 'en' ? '/en' : ''}/eagleseye`);
};

const EaglesEye = () => {
  return <Main />;
};

export default EaglesEye;
