import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/EightyThrew/Main';

const EightyThrew: NextPage = () => {
  return (
    <Box>
      <AppSeo page='eightythrew' />
      <Main />
    </Box>
  );
};

export default EightyThrew;
