import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/AroundTheCompass/Main';

const AroundTheCompass: NextPage = () => {
  return (
    <Box>
      <AppSeo page='aroundthecompass' />
      <Main />
    </Box>
  );
};

export default AroundTheCompass;
