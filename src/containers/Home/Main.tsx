import React, { FC } from 'react';
import { Grid } from '@chakra-ui/react';
import Description from './Description';
import History from './History';
import Respect from './Respect';
import Title from './Title';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';

const Main: FC = () => {
  return (
    <div data-cy='home-main'>
      <NavigationBar />
      <Title />
      <Grid
        templateRows='repeat(3, auto)'
        gap={{ base: 16, md: 32 }}
        p={2}
        px={{ base: 2, md: 4 }}
        mt={{ base: 16, md: 32 }}
      >
        <Description />
        <History />
        <Respect />
      </Grid>
      <Footer />
    </div>
  );
};

export default Main;
