import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import HomeMain from '@/containers/HomeMain';

const Home: NextPage = () => {
  return (
    <Box>
      <HomeMain />
    </Box>
  );
};

export default Home;
