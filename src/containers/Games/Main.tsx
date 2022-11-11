import React, { FC } from 'react';
import List from './List';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';

const Main: FC = () => {
  return (
    <div data-cy='games-main'>
      <NavigationBar />
      <List />
      <Footer />
    </div>
  );
};

export default Main;
