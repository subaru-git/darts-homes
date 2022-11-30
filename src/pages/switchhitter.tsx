import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/SwitchHitter/Main';

const SwitchHitter: NextPage = () => {
  return (
    <>
      <AppSeo page='switchhitter' />
      <Main />
    </>
  );
};

export default SwitchHitter;
