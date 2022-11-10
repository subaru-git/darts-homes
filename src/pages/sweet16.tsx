import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Sweet16/Main';

const Sweet16: NextPage = () => {
  return (
    <Box>
      <AppSeo page='sweet16' />
      <Main />
    </Box>
  );
};

export default Sweet16;
