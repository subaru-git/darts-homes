import React from 'react';
import { Box } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/CountUp/Main';
import en from '@/lang/en';
import ja from '@/lang/ja';

type Props = {
  title: string;
  description: string;
  canonical: string;
};

const CountUp: NextPage<Props> = ({ title, description, canonical }) => {
  return (
    <Box>
      <AppSeo title={title} description={description} canonical={canonical} />
      <Main />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const { seo } = locale === 'ja' ? ja : en;
  const { title, description } = seo.countup;
  const canonical = `https://darts.homes${locale === 'en' ? '/en' : ''}/countup`;
  return { props: { title, description, canonical } };
};

export default CountUp;
