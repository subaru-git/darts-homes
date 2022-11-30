import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/DoubleTrouble/Main';

const DoubleTrouble: NextPage = () => {
  return (
    <>
      <AppSeo page='doubletrouble' />
      <Main />
    </>
  );
};

export default DoubleTrouble;
