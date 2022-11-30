import React, { FC } from 'react';
import AppAdsense from '@/components/AppAdsense';
import CardView from '@/containers/Respect/CardView';
import MainTemplate from '@/templates/MainTemplate';

type MainProps = {
  data: RespectResult;
};

const Main: FC<MainProps> = ({ data }) => {
  return (
    <MainTemplate label='respect-main'>
      <CardView data={data} />
      <AppAdsense />
    </MainTemplate>
  );
};

export default Main;
