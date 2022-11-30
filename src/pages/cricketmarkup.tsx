import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/CricketMarkUp/Main';

const CricketMarkUp: NextPage = () => {
  return (
    <>
      <AppSeo page='cricketmarkup' />
      <Main />
    </>
  );
};

export default CricketMarkUp;
