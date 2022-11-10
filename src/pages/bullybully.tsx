import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/BullyBully/Main';

const BullyBully: NextPage = () => {
  return (
    <Box>
      <AppSeo page='bullybully' />
      <Main />
    </Box>
  );
};

export default BullyBully;
