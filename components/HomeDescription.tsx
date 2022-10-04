import { Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const HomeDescription: FC = () => {
  return (
    <Grid templateColumns="repeat(2, auto)" justifyContent="center" gap={4}>
      <GridItem>
        <Image src="/darts.jpg" alt="darts" maxWidth="700px" />
      </GridItem>
      <GridItem>
        <Center h="100%">
          <Text fontSize="xl">
            This application has some darts games.
            <br />
            The games are for solo practice. (Is the 01 game not solo? It&#39;s
            for software development learning)
            <br />
            Some games are not supported by DartsLive Home. So if a game will
            support by DartsLive Home, the game changes to deprecated.
          </Text>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default HomeDescription;
