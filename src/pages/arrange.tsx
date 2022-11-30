import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Arrange/Main';

const BullyBully: NextPage = () => {
  return (
    <>
      <AppSeo page='arrange' />
      <Main />
    </>
  );
};

export default BullyBully;
