---
to: src/pages/<%= h.changeCase.lower(name) %>.tsx
---
import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/<%= name %>/Main';

const <%= name %>: NextPage = () => {
  return (
    <Box>
      <AppSeo title="<%= h.changeCase.lower(name) %>" />
      <Main />
    </Box>
  );
};

export default <%= name %>;
