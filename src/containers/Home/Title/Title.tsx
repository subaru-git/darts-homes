'use client';
import React, { FC } from 'react';
import Button from '@/atoms/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const Title: FC = () => {
  const t = useTranslations('Home.title');
  const router = useRouter();
  return (
    <div className='flex h-52 flex-col justify-center gap-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 md:h-80 md:gap-8'>
      <h1 className='whitespace-pre-wrap text-center text-2xl font-bold leading-8 md:text-5xl'>
        {t('title')}
      </h1>
      <span className='text-center text-sm md:text-lg'>{t('description')}</span>
      <div className='flex justify-center'>
        <Button onClick={() => router.push('/games')}>{t('button')}</Button>
      </div>
    </div>
  );
};

export default Title;
