import { Grid, GridItem } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import CricketNumberCountGame from "../lib/CricketNumberCountGame/CricketNumberCountGame";
import CountButtons from "./CountButtons";
import CricketNumberCountBoard from "./CricketNumberCountBoard";
import RoundBoard from "./RoundBoard";
import RoundScore from "./RoundScore";
import TargetBoard from "./TargetBoard";

const CricketNumberCountMain: FC = () => {
  const [game, setGame] = useState(new CricketNumberCountGame(10));
  return (
    <>
      <Grid templateColumns="repeat(2, auto)" gap={6}>
        <GridItem>
          <Grid templateRows="repeat(3, auto)" gap={10}>
            <GridItem>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                  <Grid templateRows="repeat(2, auto)">
                    <GridItem>
                      <TargetBoard
                        target={
                          game.getCurrentTarget() === "-1"
                            ? "Finish"
                            : game.getCurrentTarget()
                        }
                        message="Target"
                      />
                    </GridItem>
                    <GridItem>
                      <TargetBoard
                        target={game.getCount().toString()}
                        message="Count"
                        size="sm"
                      />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem maxW="500px" alignSelf="center">
                  <CricketNumberCountBoard data={game.getScore()} />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
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
            </GridItem>
            <GridItem>
              <RoundBoard score={game.getRoundsScore()} />
            </GridItem>
          </Grid>
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
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default CricketNumberCountMain;
