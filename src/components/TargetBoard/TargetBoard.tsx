import React, { FC } from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

type TargetBoardProps = {
  target?: string;
  message: string;
  size?: 'sm' | 'md';
};

const TargetBoard: FC<TargetBoardProps> = ({ target, message, size = 'md' }) => {
  const messageFontSize = useBreakpointValue({
    base: size === 'md' ? '24px' : '18px',
    md: size === 'md' ? '32px' : '24px',
  });
  const targetFontSize = useBreakpointValue({
    base: size === 'md' ? '48px' : '32px',
    md: size === 'md' ? '96px' : '64px',
  });
  return (
    <Box>
      <Text
        fontSize={messageFontSize}
        fontWeight='bold'
        color='green.500'
        pl={{ base: 1, md: 4 }}
        pt={{ base: 1, md: 4 }}
      >
        {message}
      </Text>
      <Text
        textAlign='center'
        fontSize={targetFontSize}
        py={{ base: 1, md: 8 }}
        fontWeight='bold'
        fontFamily='roboto, sans-serif'
        minWidth={{ base: '110px', md: '260px' }}
      >
        {target}
      </Text>
    </Box>
  );
};

export default TargetBoard;
