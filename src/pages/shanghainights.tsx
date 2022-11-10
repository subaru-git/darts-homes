import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/ShanghaiNights/Main';

const ShanghaiNights: NextPage = () => {
  return (
    <Box>
      <AppSeo page='shanghainights' />
      <Main />
    </Box>
  );
};

export default ShanghaiNights;
