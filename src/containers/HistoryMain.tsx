import React, { FC } from 'react';
import Footer from '@/components/Footer';
import HistoryBoard from '@/components/HistoryBoard';
import NavigationBar from '@/components/NavigationBar';

const HistoryMain: FC = () => {
  return (
    <div data-cy='history-main'>
      <NavigationBar />
      <HistoryBoard />
      <Footer />
    </div>
  );
};

export default HistoryMain;
