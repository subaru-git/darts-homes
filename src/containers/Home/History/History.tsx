'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/tailwind';
import { useTranslations } from 'next-intl';

const History: FC = () => {
  const isMd = useBreakpoint('md');
  return <>{isMd ? <DesktopHistory /> : <MobileHistory />}</>;
};

const DesktopHistory: FC = () => {
  const t = useTranslations('Home.history');
  return (
    <div className='flex justify-center gap-8'>
      <Image
        src='/history.webp'
        alt='history image'
        style={{ objectFit: 'cover' }}
        width={640}
        height={360}
      />
      <div className='flex max-w-lg flex-col justify-center gap-4'>
        <h2 className='text-2xl font-bold'>{t('title')}</h2>
        <p className='whitespace-pre-wrap text-base'>{t('description')}</p>
        <p className='whitespace-pre-wrap text-base'>{t('disclaimer')}</p>
      </div>
    </div>
  );
};

const MobileHistory: FC = () => {
  const t = useTranslations('Home.history');
  return (
    <div className='flex flex-col justify-center gap-4'>
      <Image
        src='/history.webp'
        alt='history image'
        style={{ objectFit: 'cover' }}
        width={360}
        height={180}
      />
      <h2 className='text-center text-lg font-bold'>{t('title')}</h2>
      <p className='whitespace-pre-wrap text-sm'>{t('description')}</p>
      <p className='whitespace-pre-wrap text-sm'>{t('disclaimer')}</p>
    </div>
  );
};

export default History;
