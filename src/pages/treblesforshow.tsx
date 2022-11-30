import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TreblesForShow/Main';

const TreblesForShow: NextPage = () => {
  return (
    <>
      <AppSeo page='treblesforshow' />
      <Main />
    </>
  );
};

export default TreblesForShow;
