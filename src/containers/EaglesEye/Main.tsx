import React, { FC } from 'react';
import { Box, Center, Flex, Grid, GridItem } from '@chakra-ui/react';
import CameraView from '@/components/CameraView';
import CountBullButtons from '@/components/CountBullButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import Description from '@/containers/EaglesEye/Description';
import NewGame from '@/containers/EaglesEye/NewGame';
import { useEaglesEyeGame, useEaglesEyeGameSet } from '@/contexts/EaglesEyeGameContext';
import { db } from '@/db/db';
import EaglesEyeGame from '@/lib/EaglesEyeGame/EaglesEyeGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';

const EaglesEyeMain: FC = () => {
  const game = useEaglesEyeGame();
  const setGame = useEaglesEyeGameSet();
  return (
    <div data-cy='eagles-eye-main'>
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

const DesktopMain: FC<{ game: EaglesEyeGame; setGame: (game: EaglesEyeGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new EaglesEyeGame())} />
        <Flex gap={2}>
          <Description />
          <CameraView />
        </Flex>
      </Flex>
      <Grid templateRows={'repeat(3, auto)'} gap={10} justifyContent='center' p={10}>
        <GridItem>
          <Flex justifyContent='space-around' gap={10}>
            <TargetBoard
              message={`Round ${game.getRound()}`}
              target={game.getTotalScore().toString().padStart(3)}
            />
            <CountBullButtons
              onCount={(n) => {
                const g = Object.assign(new EaglesEyeGame(), game);
                g.addScore(n);
                setGame(g);
              }}
              disabled={game.getRoundScore().length >= 3}
            />
          </Flex>
        </GridItem>
        <GridItem maxW={1280}>
          <RoundScore
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
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.eaglesEyeResult);
              setGame(new EaglesEyeGame());
            }}
            result={getResult(game)}
          />
        </GridItem>
        <GridItem>
          <RoundBoard score={game.getScore()} />
        </GridItem>
      </Grid>
    </>
  );
};

const MobileMain: FC<{ game: EaglesEyeGame; setGame: (game: EaglesEyeGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Grid gap={4} justifyItems='center'>
      <GridItem width='100%'>
        <Flex justifyContent='space-between'>
          <NewGame onNewGame={() => setGame(new EaglesEyeGame())} />
          <Box width='100%' pr='40px'>
            <Center>
              <TargetBoard
                message={`Round ${game.getRound()}`}
                target={game.getTotalScore().toString()}
              />
            </Center>
          </Box>
          <Flex direction='column'>
            <Description />
            <CameraView />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <RoundScore
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
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.eaglesEyeResult);
            setGame(new EaglesEyeGame());
          }}
          result={getResult(game)}
        />
      </GridItem>
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

      <GridItem>
        <RoundBoard score={game.getScore()} />
      </GridItem>
    </Grid>
  );
};

const getResult = (game: EaglesEyeGame) =>
  `Total: ${game.getGameResult().result}\nD-BULL: ${game
    .getGameResult()
    .scores.flat()
    .reduce((pre, crr) => pre + (crr === 'D-BULL' ? 1 : 0), 0)}\nS-BULL: ${game
    .getGameResult()
    .scores.flat()
    .reduce((pre, crr) => pre + (crr === 'S-BULL' ? 1 : 0), 0)}\n`;

export default EaglesEyeMain;
