import React, { FC } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { IoIosHelpCircleOutline } from 'react-icons/io';

type SettingHeadingProps = {
  title: string;
  hintHeader: string;
  hintBody: string;
};

const SettingHeading: FC<SettingHeadingProps> = ({ title, hintHeader, hintBody }) => {
  return (
    <Flex alignItems='center'>
      <Text fontSize='sm' fontWeight='bold' color='gray.500'>
        {title}
      </Text>
      <Popover>
        <PopoverTrigger>
          <IconButton
            icon={<IoIosHelpCircleOutline />}
            aria-label='simulation mode help'
            variant='ghost'
            color='gray.500'
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border='0'>{hintHeader}</PopoverHeader>
          <PopoverBody>{hintBody}</PopoverBody>
        </PopoverContent>
      </Popover>{' '}
    </Flex>
  );
};

export default SettingHeading;
