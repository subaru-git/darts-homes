import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import EaglesEyeMain from '@/containers/EaglesEye/Main';
import en from '@/lang/en';
import ja from '@/lang/ja';

type Props = {
  title: string;
  description: string;
  canonical: string;
};

const EaglesEye: NextPage<Props> = ({ title, description, canonical }) => {
  return (
    <>
      <AppSeo title={title} description={description} canonical={canonical} />
      <EaglesEyeMain />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const { seo } = locale === 'ja' ? ja : en;
  const { title, description } = seo.eagleseye;
  const canonical = `https://darts.homes${locale === 'en' ? '/en' : ''}/eagleseye`;
  return { props: { title, description, canonical } };
};

export default EaglesEye;
