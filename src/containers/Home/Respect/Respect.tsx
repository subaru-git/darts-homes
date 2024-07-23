'use client';
import React, { FC } from 'react';
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useBreakpoint } from '@/hooks/tailwind';
import { useTranslations } from 'next-intl';

const Respect: FC = () => {
  const isMd = useBreakpoint('md');
  return <>{isMd ? <DesktopRespect /> : <MobileRespect />}</>;
};

const DesktopRespect: FC = () => {
  const t = useTranslations('Home.description');
  return (
    <div className='flex justify-center gap-8'>
      <div className='h-[360px] w-[640px]'>
        <LiteYoutubeEmbed
          id='HiNOjEYbUXc'
          title='【ダーツ】友達にダーツをさせる方法【菊地山口】'
          webp
        />
      </div>
      <div className='flex max-w-lg flex-col justify-center gap-4'>
        <h2 className='text-2xl font-bold'>{t('title')}</h2>
        <p className='whitespace-pre-wrap text-base'>{t('description')}</p>
      </div>
    </div>
  );
};

const MobileRespect: FC = () => {
  const t = useTranslations('Home.description');
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='h-[180px] w-[320px]'>
        <LiteYoutubeEmbed
          id='HiNOjEYbUXc'
          title='【ダーツ】友達にダーツをさせる方法【菊地山口】'
          webp
        />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-lg font-bold'>{t('title')}</h2>
        <p className='whitespace-pre-wrap text-sm'>{t('description')}</p>
      </div>
    </div>
  );
};

export default Respect;
