import React, { FC } from 'react'
import { Box, Center, HStack, Link, Text } from '@chakra-ui/react'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

const Footer: FC = () => {
  return (
    <Box bg='gray.700' h='24px' w='100%' bottom={0} position='absolute' mb='-24px'>
      <Center>
        <HStack gap={8}>
          <Text color='white'>{`(c) 2022 okadat`}</Text>
          <HStack gap={2}>
            <Link href='https://github.com/subaru-git' aria-label='subaru-git github page'>
              <AiFillGithub size='24px' color='white' />
            </Link>
            <Link href='https://twitter.com/subaru_m_' aria-label='subaru_m_ twitter'>
              <AiOutlineTwitter size='24px' color='white' />
            </Link>
          </HStack>
        </HStack>
      </Center>
    </Box>
  )
}

export default Footer
