import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TwoDartCombinations/Main';

const TwoDartCombinations: NextPage = () => {
  return (
    <>
      <AppSeo page='twodartcombinations' />
      <Main />
    </>
  );
};

export default TwoDartCombinations;
