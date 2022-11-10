import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TwoDartCombinations/Main';

const TwoDartCombinations: NextPage = () => {
  return (
    <Box>
      <AppSeo page='twodartcombinations' />
      <Main />
    </Box>
  );
};

export default TwoDartCombinations;
