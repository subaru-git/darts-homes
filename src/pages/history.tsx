import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/History/Main';

const History: NextPage = () => {
  return (
    <>
      <AppSeo page='history' />
      <Main />
    </>
  );
};

export default History;
