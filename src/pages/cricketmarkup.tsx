import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/CricketMarkUp/Main';

const CricketMarkUp: NextPage = () => {
  return (
    <Box>
      <AppSeo page='cricketmarkup' />
      <Main />
    </Box>
  );
};

export default CricketMarkUp;
