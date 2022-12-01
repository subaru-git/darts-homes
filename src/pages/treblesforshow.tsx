import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TreblesForShow/Main';
import en from '@/lang/en';
import ja from '@/lang/ja';

type Props = {
  title: string;
  description: string;
  canonical: string;
};

const TreblesForShow: NextPage<Props> = ({ title, description, canonical }) => {
  return (
    <>
      <AppSeo title={title} description={description} canonical={canonical} />
      <Main />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const { seo } = locale === 'ja' ? ja : en;
  const { title, description } = seo.treblesforshow;
  const canonical = `https://darts.homes${locale === 'en' ? '/en' : ''}/treblesforshow`;
  return { props: { title, description, canonical } };
};

export default TreblesForShow;
