import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import EaglesEyeMain from '@/containers/EaglesEye/Main';

const EaglesEye: NextPage = () => {
  return (
    <Box>
      <EaglesEyeMain />
    </Box>
  );
};

export default EaglesEye;
