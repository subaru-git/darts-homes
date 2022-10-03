import { Grid, GridItem } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import CricketNumberCountGame from "../lib/CricketNumberCountGame/CricketNumberCountGame";
import CountButtons from "../components/CountButtons";
import CricketNumberCountBoard from "../components/CricketNumberCountBoard";
import NavigationBar, { NavItem } from "../components/NavigationBar";
import RoundBoard from "../components/RoundBoard";
import RoundScore from "../components/RoundScore";
import TargetBoard from "../components/TargetBoard";

const CricketNumberCountMain: FC = () => {
  const [game, setGame] = useState(new CricketNumberCountGame(10));
  return (
    <div data-cy="cricket-number-count-main">
      <NavigationBar items={items} />
      <Grid templateColumns="repeat(2, auto)" gap={6} p={4}>
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
    </div>
  );
};

const items: Array<NavItem> = [
  {
    label: "Games",
    children: [
      {
        label: "501",
        subLabel: "The popular dart game",
        href: "/n01",
      },
      {
        label: "Eagle's Eye",
        subLabel: "A dart game for BULL practice",
        href: "/eagleseye",
      },
      {
        label: "Cricket Number Count",
        subLabel: "A original dart game for practice. designed by kikuyama.",
        href: "#",
      },
    ],
  },
  {
    label: "Respects",
    href: "#",
  },
];

export default CricketNumberCountMain;
