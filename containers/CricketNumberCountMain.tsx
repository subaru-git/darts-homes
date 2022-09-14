import { Grid, GridItem } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import CricketNumberCountGame from "../lib/CricketNumberCountGame/CricketNumberCountGame";
import CountButtons from "./CountButtons";
import CricketNumberCountBoard from "./CricketNumberCountBoard";
import RoundScore from "./RoundScore";
import TargetBoard from "./TargetBoard";

const CricketNumberCountMain: FC = () => {
  const [game, setGame] = useState(new CricketNumberCountGame(10));
  return (
    <>
      <Grid templateColumns="repeat(2, auto)" gap={6}>
        <GridItem>
          <TargetBoard score={game.getCurrentTarget()} player="Player" />
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new CricketNumberCountGame(10), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new CricketNumberCountGame(10), game);
              g.roundChange();
              setGame(g);
            }}
          />
          <CricketNumberCountBoard data={game.getScore()} />
        </GridItem>
        <GridItem pt={4}>
          <CountButtons
            onCount={(n) => {
              const g = Object.assign(new CricketNumberCountGame(10), game);
              g.addScore(n);
              setGame(g);
            }}
            begin={15}
            end={20}
            reversed={true}
            disabled={game.getRoundScore().length >= 3}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default CricketNumberCountMain;
