import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type CardProps = {
  children?: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <Box
      borderRadius={'xl'}
      p={5}
      shadow={'md'}
      borderWidth={'1px'}
      maxWidth={'md'}
      height={'100%'}
      backgroundColor={'gray.50'}
    >
      {children}
    </Box>
  );
};

export default Card;
