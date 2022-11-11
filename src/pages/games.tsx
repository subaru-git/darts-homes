import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Games/Main';

const Games: NextPage = () => {
  return (
    <Box>
      <AppSeo page='games' />
      <Main />
    </Box>
  );
};

export default Games;
