import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Games/Main';

const Games: NextPage = () => {
  return (
    <>
      <AppSeo page='games' />
      <Main />
    </>
  );
};

export default Games;
