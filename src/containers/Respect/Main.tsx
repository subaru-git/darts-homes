import React, { FC } from 'react';
import CardView from '@/containers/Respect/CardView';
import MainTemplate from '@/templates/MainTemplate';

type MainProps = {
  data: RespectResult;
};

const Main: FC<MainProps> = ({ data }) => {
  return (
    <MainTemplate label='respect-main'>
      <CardView data={data} />
    </MainTemplate>
  );
};

export default Main;
