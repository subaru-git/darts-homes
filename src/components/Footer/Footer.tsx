import React, { FC } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import useLocale from '@/hooks/locale';

const Footer: FC = () => {
  const { t } = useLocale();
  return (
    <div className='absolute bottom-0 -mb-80 h-80 w-full bg-gray-700 md:-mb-52 md:h-52'>
      <div className='mt-2 flex flex-col items-center md:mt-4 md:gap-4'>
        <div className='flex flex-1 flex-col justify-center gap-6 p-4 md:flex-row md:gap-8'>
          <div className='flex flex-col gap-2 md:basis-48'>
            <h2 className='text-xl font-bold text-white'>{`Darts Homes`}</h2>
            <p className='text-xs text-white'>{t.footer.description}</p>
          </div>
          <div className='flex flex-col gap-2 md:basis-48'>
            <h2 className='text-xl font-bold text-white'>{`Feedback`}</h2>
            <div className='flex gap-3'>
              <a
                href={'https://github.com/subaru-git/darts-homes'}
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
          <div className='flex flex-col gap-2 md:basis-48'>
            <h2 className='text-xl font-bold text-white'>{`Legal`}</h2>
            <div className='text-xs text-white'>
              <Link href={'/termsofservice'}>{t.footer.terms}</Link>
            </div>
            <div className='text-xs text-white'>
              <Link href={'/privacypolicy'}>{t.footer.privacy}</Link>
            </div>
          </div>
        </div>
        <div className='text-xs text-gray-400 md:p-5'>{`Copyright © 2023 Darts Homes`}</div>
      </div>
    </div>
  );
};

export default Footer;
