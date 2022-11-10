import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Route64/Main';

const Route64: NextPage = () => {
  return (
    <Box>
      <AppSeo page='route64' />
      <Main />
    </Box>
  );
};

export default Route64;
