import React, { FC, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import EaglesEyeBoard from "./EaglesEyeBoard";
import CountBullButtons from "./CountBullButtons";
import EaglesEyeGame from "../lib/EaglesEyeGame/EaglesEyeGame";
import RoundBullScore from "./RoundBullScore";

const EaglesEyeMain: FC = () => {
  const [game, setGame] = useState(new EaglesEyeGame());
  return (
    <div>
      <Grid templateRows={"repeat(3, auto)"} gap={10} justifyContent="center">
        <GridItem>
          <CountBullButtons
            onCount={(n) => {
              const g = Object.assign(new EaglesEyeGame(), game);
              g.addScore(n);
              setGame(g);
            }}
            disabled={game.getRoundScore().length >= 3}
          />
        </GridItem>
        <GridItem maxW={1280}>
          <RoundBullScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new EaglesEyeGame(), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new EaglesEyeGame(), game);
              g.roundChange();
              setGame(g);
            }}
          />
        </GridItem>
        <GridItem w="100%">
          <EaglesEyeBoard data={game.getScore()} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default EaglesEyeMain;
