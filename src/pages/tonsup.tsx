import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TonsUp/Main';

const TonsUp: NextPage = () => {
  return (
    <Box>
      <AppSeo page='tonsup' />
      <Main />
    </Box>
  );
};

export default TonsUp;
