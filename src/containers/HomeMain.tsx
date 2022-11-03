import React, { FC } from 'react';
import { Grid } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import HomeDescription from '@/components/HomeDescription';
import HomeDescriptionRespect from '@/components/HomeDescriptionRespect';
import NavigationBar from '@/components/NavigationBar';

const HomeMain: FC = () => {
  return (
    <div data-cy='home-main'>
      <NavigationBar />
      <Grid templateRows='repeat(2, auto)' gap={2} p={2} px={{ base: 2, md: 4 }}>
        <HomeDescription />
        <HomeDescriptionRespect />
      </Grid>
      <Footer />
    </div>
  );
};

export default HomeMain;
