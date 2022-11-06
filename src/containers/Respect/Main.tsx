import React, { FC } from 'react';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import CardView from '@/containers/Respect/CardView';

type MainProps = {
  data: RespectResult;
};

const Main: FC<MainProps> = ({ data }) => {
  return (
    <div data-cy='respect-main'>
      <NavigationBar />
      <CardView data={data} />
      <Footer />
    </div>
  );
};

export default Main;
