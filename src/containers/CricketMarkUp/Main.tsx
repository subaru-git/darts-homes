import React, { FC } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import CountButtons from '@/components/CountButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import CricketMarkUpBoard from '@/containers/CricketMarkUp/Board';
import CricketMarkUpDescription from '@/containers/CricketMarkUp/Description';
import CricketMarkUpSettings from '@/containers/CricketMarkUp/Settings';
import { useCricketMarkUpGame, useCricketMarkUpGameSet } from '@/contexts/CricketMarkUpGameContext';
import { db } from '@/db/db';
import CricketMarkUpGame from '@/lib/CricketMarkUpGame/CricketMarkUpGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';

const Main: FC = () => {
  const game = useCricketMarkUpGame();
  const setGame = useCricketMarkUpGameSet();
  return (
    <div data-cy='cricket-mark-up-main'>
      <NavigationBar />
      {!game ? (
        <Loading />
      ) : (
        <>
          <Box display={{ base: 'none', md: 'block' }}>
            <DesktopMain game={game} setGame={setGame} />
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <MobileMain game={game} setGame={setGame} />
          </Box>
        </>
      )}
      <Footer />
    </div>
  );
};

const DesktopMain: FC<{
  game: CricketMarkUpGame;
  setGame: (game: CricketMarkUpGame) => void;
}> = ({ game, setGame }) => {
  return (
    <div>
      <Flex justifyContent='space-between'>
        <CricketMarkUpSettings
          onNewGame={(targetNumber, save) => {
            if (save) saveToDB(game.getGameResult(), db.cricketMarkUpResult);
            setGame(new CricketMarkUpGame(targetNumber));
          }}
          targetCount={game.getTargetCount()}
          isFinished={game.isFinished()}
        />
        <CricketMarkUpDescription />
      </Flex>
      <Grid templateColumns='repeat(2, auto)' gap={6} p={4}>
        <GridItem>
          <Grid templateRows='repeat(3, auto)' gap={10}>
            <GridItem>
              <Grid templateColumns='repeat(2, minmax(240px, auto))' gap={6}>
                <GridItem m={0}>
                  <Grid templateRows='repeat(2, auto)'>
                    <GridItem>
                      <TargetBoard
                        target={
                          game.getCurrentTarget() === '-1'
                            ? 'Fin'
                            : game.getCurrentTarget() === 'S-BULL'
                            ? 'BULL'
                            : game.getCurrentTarget()
                        }
                        message='Target'
                      />
                    </GridItem>
                    <GridItem>
                      <TargetBoard target={game.getCount().toString()} message='Count' size='sm' />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem maxW='500px' alignSelf='center'>
                  <CricketMarkUpBoard scores={game.getNumberOfCount()} />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <RoundScore
                scores={game.getRoundScore()}
                onClear={() => {
                  const g = Object.assign(new CricketMarkUpGame(10), game);
                  g.removeScore();
                  setGame(g);
                }}
                onRoundChange={() => {
                  const g = Object.assign(new CricketMarkUpGame(10), game);
                  g.roundChange();
                  setGame(g);
                }}
                isFinished={game.isFinished()}
                onRoundOver={() => {
                  saveToDB(game.getGameResult(), db.cricketMarkUpResult);
                  setGame(new CricketMarkUpGame(game.getTargetCount()));
                }}
                result={getResult(game)}
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
              const g = Object.assign(new CricketMarkUpGame(10), game);
              g.addScore(n);
              setGame(g);
            }}
            buttons={[20, 19, 18, 17, 16, 15]}
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
            other
          />
        </GridItem>
      </Grid>
    </div>
  );
};

const MobileMain: FC<{
  game: CricketMarkUpGame;
  setGame: (game: CricketMarkUpGame) => void;
}> = ({ game, setGame }) => {
  return (
    <Grid gap={4} justifyItems='center'>
      <GridItem w='100%'>
        <Flex justifyContent='space-between'>
          <CricketMarkUpSettings
            onNewGame={(targetNumber, save) => {
              if (save) saveToDB(game.getGameResult(), db.cricketMarkUpResult);
              setGame(new CricketMarkUpGame(targetNumber));
            }}
            targetCount={game.getTargetCount()}
            isFinished={game.isFinished()}
          />
          <Flex alignItems='end' w='100%' justifyContent='space-around'>
            <TargetBoard
              target={
                game.getCurrentTarget() === '-1'
                  ? 'Fin'
                  : game.getCurrentTarget() === 'S-BULL'
                  ? 'BULL'
                  : game.getCurrentTarget()
              }
              message='Target'
            />
            <TargetBoard target={game.getCount().toString()} message='Count' size='sm' />
          </Flex>
          <CricketMarkUpDescription />
        </Flex>
      </GridItem>
      <Box maxH={250} overflow='scroll'>
        <CricketMarkUpBoard scores={game.getNumberOfCount()} />
      </Box>
      <RoundScore
        scores={game.getRoundScore()}
        onClear={() => {
          const g = Object.assign(new CricketMarkUpGame(10), game);
          g.removeScore();
          setGame(g);
        }}
        onRoundChange={() => {
          const g = Object.assign(new CricketMarkUpGame(10), game);
          g.roundChange();
          setGame(g);
        }}
        isFinished={game.isFinished()}
        onRoundOver={() => {
          saveToDB(game.getGameResult(), db.cricketMarkUpResult);
          setGame(new CricketMarkUpGame(game.getTargetCount()));
        }}
        result={getResult(game)}
      />
      <Box w='100%'>
        <CountButtons
          onCount={(n) => {
            const g = Object.assign(new CricketMarkUpGame(10), game);
            g.addScore(n);
            setGame(g);
          }}
          buttons={[parseInt(game.getCurrentTarget())]}
          bull={game.getCurrentTarget() === 'S-BULL'}
          disabled={game.getRoundScore().length >= 3 || game.isFinished()}
          other
        />
        <RoundBoard score={game.getRoundsScore()} />
      </Box>
    </Grid>
  );
};

const getResult = (game: CricketMarkUpGame) =>
  `Total: ${game.getGameResult().result}\n${game
    .getGameResult()
    .scores.map((s) => `${s.number === 25 ? 'BULL' : s.number}: ${s.total}`)
    .join('\n')}\n`;

export default Main;
