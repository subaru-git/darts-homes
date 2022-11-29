import React, { FC } from 'react';
import List from './List';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  return (
    <MainTemplate label='games-main'>
      <List />
    </MainTemplate>
  );
};

export default Main;
