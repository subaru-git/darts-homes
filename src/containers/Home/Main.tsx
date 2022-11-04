import React, { FC } from 'react';
import { Grid } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import Description from '@/containers/Home/Description';
import Respect from '@/containers/Home/Respect';

const Main: FC = () => {
  return (
    <div data-cy='home-main'>
      <NavigationBar />
      <Grid templateRows='repeat(2, auto)' gap={2} p={2} px={{ base: 2, md: 4 }}>
        <Description />
        <Respect />
      </Grid>
      <Footer />
    </div>
  );
};

export default Main;
