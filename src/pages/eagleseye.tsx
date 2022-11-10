import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import EaglesEyeMain from '@/containers/EaglesEye/Main';

const EaglesEye: NextPage = () => {
  return (
    <Box>
      <AppSeo page='eagleseye' />
      <EaglesEyeMain />
    </Box>
  );
};

export default EaglesEye;
