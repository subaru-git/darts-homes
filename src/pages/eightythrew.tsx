import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/EightyThrew/Main';

const EightyThrew: NextPage = () => {
  return (
    <>
      <AppSeo page='eightythrew' />
      <Main />
    </>
  );
};

export default EightyThrew;
