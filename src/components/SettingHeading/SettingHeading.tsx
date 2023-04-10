import React, { FC } from 'react';
import {
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
    <div className='flex items-center'>
      <span className='text-sm font-bold text-gray-500'>{title}</span>
      <Popover>
        <PopoverTrigger>
          <IconButton
            icon={<IoIosHelpCircleOutline />}
            variant={'ghost'}
            color={'gray.500'}
            aria-label={`${title} help`}
          ></IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border={'0'}>{hintHeader}</PopoverHeader>
          <PopoverBody>{hintBody}</PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SettingHeading;
