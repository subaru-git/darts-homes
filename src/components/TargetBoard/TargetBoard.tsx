import React, { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'

type TargetBoardProps = {
  target?: string
  message: string
  size?: 'sm' | 'md'
}

const TargetBoard: FC<TargetBoardProps> = ({ target, message, size = 'md' }) => {
  return (
    <Box width={300}>
      <Heading fontSize={size === 'md' ? '32px' : '24px'} color='green.500' pl={4} pt={4}>
        {message}
      </Heading>
      <Heading textAlign='center' fontSize={size === 'md' ? '96px' : '64px'} py={8}>
        {target}
      </Heading>
    </Box>
  )
}

export default TargetBoard
