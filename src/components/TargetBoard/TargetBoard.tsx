import React, { FC } from 'react'
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react'

type TargetBoardProps = {
  target?: string
  message: string
  size?: 'sm' | 'md'
}

const TargetBoard: FC<TargetBoardProps> = ({ target, message, size = 'md' }) => {
  const messageFontSize = useBreakpointValue({
    base: size === 'md' ? '24px' : '18px',
    md: size === 'md' ? '32px' : '24px',
  })
  const targetFontSize = useBreakpointValue({
    base: size === 'md' ? '48px' : '32px',
    md: size === 'md' ? '96px' : '64px',
  })
  return (
    <Box>
      <Heading
        fontSize={messageFontSize}
        color='green.500'
        pl={{ base: 1, md: 4 }}
        pt={{ base: 1, md: 4 }}
      >
        {message}
      </Heading>
      <Heading textAlign='center' fontSize={targetFontSize} py={{ base: 1, md: 8 }}>
        {target}
      </Heading>
    </Box>
  )
}

export default TargetBoard
