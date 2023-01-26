import React, { FC } from 'react';
import Image from 'next/image';
import useLocale from '@/hooks/locale';
import { useBreakpoint } from '@/hooks/tailwind';

const History: FC = () => {
  const isMd = useBreakpoint('md');
  return <>{isMd ? <DesktopHistory /> : <MobileHistory />}</>;
};

const DesktopHistory: FC = () => {
  const { t } = useLocale();
  return (
    <div className='flex justify-center gap-8'>
      <Image
        src='/history.webp'
        alt='history image'
        objectFit='cover'
        width='640px'
        height='360px'
      />
      <div className='flex max-w-lg flex-col justify-center gap-4'>
        <h2 className='text-2xl font-bold'>{t.home.history.title}</h2>
        <p className='whitespace-pre-wrap text-base'>{t.home.history.description.join('\n')}</p>
        <p className='whitespace-pre-wrap text-base'>{t.home.history.disclaimer.join('\n')}</p>
      </div>
    </div>
  );
};

const MobileHistory: FC = () => {
  const { t } = useLocale();
  return (
    <div className='flex flex-col justify-center gap-4'>
      <Image
        src='/history.webp'
        alt='history image'
        objectFit='cover'
        width='360px'
        height='180px'
      />
      <h2 className='text-center text-lg font-bold'>{t.home.history.title}</h2>
      <p className='whitespace-pre-wrap text-sm'>{t.home.history.description.join('\n')}</p>
      <p className='whitespace-pre-wrap text-sm'>{t.home.history.disclaimer.join('\n')}</p>
    </div>
  );
};

export default History;
