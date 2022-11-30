import React, { FC } from 'react';
import List from './List';
import AppAdsense from '@/components/AppAdsense';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  return (
    <MainTemplate label='games-main'>
      <List />
      <AppAdsense />
    </MainTemplate>
  );
};

export default Main;
