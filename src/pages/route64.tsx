import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Route64/Main';

const Route64: NextPage = () => {
  return (
    <>
      <AppSeo page='route64' />
      <Main />
    </>
  );
};

export default Route64;
