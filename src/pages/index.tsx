import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Home/Main';

type Props = {
  title: string;
  description: string;
  canonical: string;
};

const Home: NextPage<Props> = ({ title, description, canonical }) => {
  return (
    <>
      <AppSeo title={title} description={description} canonical={canonical} />
      <Main />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { title: '', description: '', canonical: '' } };
};
export default Home;
