import React, { FC } from 'react'
import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoLanguage } from 'react-icons/io5'

const LanguageChangeButton: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<IoLanguage />} variant='ghost' aria-label='Change language' />
      </PopoverTrigger>
      <PopoverContent>
        <Link href='/' locale='ja' passHref>
          <Box
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
          >
            <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
              日本語
            </Text>
          </Box>
        </Link>
        <Link href='/' locale='en' passHref>
          <Box
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
          >
            <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
              English
            </Text>
          </Box>
        </Link>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageChangeButton
