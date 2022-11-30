import React from 'react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import EaglesEyeMain from '@/containers/EaglesEye/Main';

const EaglesEye: NextPage = () => {
  return (
    <>
      <AppSeo page='eagleseye' />
      <EaglesEyeMain />
    </>
  );
};

export default EaglesEye;
