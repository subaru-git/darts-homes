import React, { FC } from 'react';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import HistoryBoard from '@/containers/History/Board';

const Main: FC = () => {
  return (
    <div data-cy='history-main'>
      <NavigationBar />
      <HistoryBoard />
      <Footer />
    </div>
  );
};

export default Main;
