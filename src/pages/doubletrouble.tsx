import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/DoubleTrouble/Main';

const DoubleTrouble: NextPage = () => {
  return (
    <Box>
      <AppSeo page='doubletrouble' />
      <Main />
    </Box>
  );
};

export default DoubleTrouble;
