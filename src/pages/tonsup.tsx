import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TonsUp/Main';

const TonsUp: NextPage = () => {
  return (
    <>
      <AppSeo page='tonsup' />
      <Main />
    </>
  );
};

export default TonsUp;
