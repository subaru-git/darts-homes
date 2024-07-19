'use client';
import React, { FC } from 'react';
import { Adsense } from '@ctrl/react-adsense';

const AppAdsense: FC = () => {
  return (
    <Adsense
      client={process.env.NEXT_PUBLIC_ADSENSE_ID ?? ''}
      slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? ''}
      style={{ display: 'inline-block', width: '100%', height: '90px' }}
      adTest={process.env.NODE_ENV === 'production' ? 'off' : 'on'}
    />
  );
};

export default AppAdsense;
