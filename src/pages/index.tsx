import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Main from '@/containers/Home/Main';

const Home: NextPage = () => {
  return (
    <Box>
      <Main />
    </Box>
  );
};

export default Home;
