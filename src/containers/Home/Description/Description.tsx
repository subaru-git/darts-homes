'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/tailwind';
import { useTranslations } from 'next-intl';

const Description: FC = () => {
  const isMd = useBreakpoint('md');
  return <>{isMd ? <DesktopDescription /> : <MobileDescription />}</>;
};

const DesktopDescription: FC = () => {
  const t = useTranslations('Home.description');
  return (
    <div className='flex justify-center gap-8'>
      <Image
        src='/darts.webp'
        alt='description image'
        style={{ objectFit: 'contain' }}
        width={640}
        height={360}
      />
      <div className='flex max-w-lg flex-col justify-center gap-4'>
        <h2 className='text-2xl font-bold'>{t('title')}</h2>
        <p className='whitespace-pre-wrap text-base'>{t('description')}</p>
      </div>
    </div>
  );
};

const MobileDescription: FC = () => {
  const t = useTranslations('Home.description');
  return (
    <div className='flex flex-col justify-center gap-4'>
      <Image
        src='/darts.webp'
        alt='description image'
        style={{ objectFit: 'contain' }}
        width={360}
        height={180}
      />
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-lg font-bold'>{t('title')}</h2>
        <p className='whitespace-pre-wrap text-sm'>{t('description')}</p>
      </div>
    </div>
  );
};
export default Description;
