import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/AroundTheCompass/Main';

const AroundTheCompass: NextPage = () => {
  return (
    <>
      <AppSeo page='aroundthecompass' />
      <Main />
    </>
  );
};

export default AroundTheCompass;
