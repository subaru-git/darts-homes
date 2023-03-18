import React, { FC } from 'react';
import Description from './Description';
import Disclaimer from './Disclaimer';
import History from './History';
import Respect from './Respect';
import Title from './Title';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  return (
    <MainTemplate label='home-main'>
      <Title />
      <div className='flex flex-col gap-4 p-2 md:items-center md:gap-8 md:px-4'>
        <Disclaimer />
        <Description />
        <History />
        <Respect />
      </div>
    </MainTemplate>
  );
};

export default Main;
