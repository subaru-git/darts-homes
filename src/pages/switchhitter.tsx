import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/SwitchHitter/Main';

const SwitchHitter: NextPage = () => {
  return (
    <Box>
      <AppSeo page='switchhitter' />
      <Main />
    </Box>
  );
};

export default SwitchHitter;
