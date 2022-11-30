import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/ShanghaiNights/Main';

const ShanghaiNights: NextPage = () => {
  return (
    <>
      <AppSeo page='shanghainights' />
      <Main />
    </>
  );
};

export default ShanghaiNights;
