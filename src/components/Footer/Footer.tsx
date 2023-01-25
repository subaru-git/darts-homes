import React, { FC } from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Footer: FC = () => {
  return (
    <div className='absolute bottom-0 -mb-6 h-6 w-full bg-gray-700'>
      <div className='flex justify-center'>
        <div className='flex gap-8'>
          <div className='text-white'>{`(c) 2023 darts homes`}</div>
          <div className='flex gap-3'>
            <a
              href={'https://github.com/subaru-git'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={'subaru-git github page'}
            >
              <AiFillGithub size={24} color={'white'} />
            </a>
            <a
              href={'https://twitter.com/darts_homes'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={'darts_homes twitter'}
            >
              <AiOutlineTwitter size={24} color={'white'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
