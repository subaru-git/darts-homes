import React, { FC } from 'react';
import Router from 'next/router';
import Button from '@/atoms/Button';
import useLocale from '@/hooks/locale';

const Title: FC = () => {
  const { t } = useLocale();
  return (
    <div className='flex h-52 flex-col justify-center gap-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 md:h-80 md:gap-8'>
      <h1 className='whitespace-pre-wrap text-center text-2xl font-bold leading-8 md:text-5xl'>
        {t.home.title.title.join('\n')}
      </h1>
      <text className='text-center text-sm md:text-lg'>{t.home.title.description.join('\n')}</text>
      <div className='flex justify-center'>
        <Button onClick={() => Router.push('/games')}>{t.home.title.button}</Button>
      </div>
    </div>
  );
};

export default Title;
