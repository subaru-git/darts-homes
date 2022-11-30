import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Sweet16/Main';

const Sweet16: NextPage = () => {
  return (
    <>
      <AppSeo page='sweet16' />
      <Main />
    </>
  );
};

export default Sweet16;
