import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TopsAndTens/Main';

const Sweet16: NextPage = () => {
  return (
    <>
      <AppSeo page='topsandtens' />
      <Main />
    </>
  );
};

export default Sweet16;
