import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/TreblesForShow/Main';

const TreblesForShow: NextPage = () => {
  return (
    <Box>
      <AppSeo page='treblesforshow' />
      <Main />
    </Box>
  );
};

export default TreblesForShow;
