import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Arrange/Main';

const BullyBully: NextPage = () => {
  return (
    <Box>
      <AppSeo page='arrange' />
      <Main />
    </Box>
  );
};

export default BullyBully;
