import React, { FC } from 'react';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import Board from '@/containers/History/Board';

const Main: FC = () => {
  return (
    <div data-cy='history-main'>
      <NavigationBar />
      <Board />
      <Footer />
    </div>
  );
};

export default Main;
