import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/BullyBully/Main';

const BullyBully: NextPage = () => {
  return (
    <>
      <AppSeo page='bullybully' />
      <Main />
    </>
  );
};

export default BullyBully;
