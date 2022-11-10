import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/History/Main';

const EaglesEye: NextPage = () => {
  return (
    <Box>
      <AppSeo page='history' />
      <Main />
    </Box>
  );
};

export default EaglesEye;
