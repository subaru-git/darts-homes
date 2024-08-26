import React, { FC } from 'react';
import { IconButton, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import Link from 'next/link';
import { IoLanguage } from 'react-icons/io5';

const LanguageChangeButton: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<IoLanguage />} variant={'ghost'} aria-label={'change language'} />
      </PopoverTrigger>
      <PopoverContent>
        <Link href={'/ja'} locale={'ja'} passHref>
          <div className='group block rounded-md p-2 hover:bg-pink-50'>
            <span className='group-hover:text-pink-400 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear'>
              日本語
            </span>
          </div>
        </Link>
        <Link href={'/en'} locale={'en'} passHref>
          <div className='group block rounded-md p-2 hover:bg-pink-50'>
            <span className='group-hover:text-pink-400 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear'>
              English
            </span>
          </div>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageChangeButton;
