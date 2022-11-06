---
to: src/pages/<%= h.changeCase.lower(name) %>.tsx
---
import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Main from '@/containers/<%= name %>/Main';

const <%= name %>: NextPage = () => {
  return (
    <Box>
      <Main />
    </Box>
  );
};

export default <%= name %>;
