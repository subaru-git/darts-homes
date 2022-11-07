import React, { FC } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import Description from './Description';
import NewGame from './NewGame';
import CountBullButtons from '@/components/CountBullButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useBullyBullyGame, useBullyBullyGameSet } from '@/contexts/BullyBullyGameContext';
import { db } from '@/db/db';
import BullyBullyGame from '@/lib/BullyBullyGame/BullyBullyGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';

const Main: FC = () => {
  const game = useBullyBullyGame();
  const setGame = useBullyBullyGameSet();
  return (
    <div data-cy='bully-bully-main'>
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

const DesktopMain: FC<{ game: BullyBullyGame; setGame: (game: BullyBullyGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new BullyBullyGame(20))} />
        <Description />
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard message={`Round ${game.getRound()}`} target='BULL' />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new BullyBullyGame(20), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new BullyBullyGame(20), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.bullyBullyResult);
              setGame(new BullyBullyGame(20));
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountBullButtons
            onCount={(n) => {
              const g = Object.assign(new BullyBullyGame(20), game);
              g.addScore(n);
              setGame(g);
            }}
          />
        </Box>
      </Flex>
      <Box p={4}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </div>
  );
};

const MobileMain: FC<{ game: BullyBullyGame; setGame: (game: BullyBullyGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame onNewGame={() => setGame(new BullyBullyGame(20))} />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message={`Round ${game.getRound()}`} target='BULL' />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Description />
      </Flex>
      <Box px={2}>
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new BullyBullyGame(20), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new BullyBullyGame(20), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.bullyBullyResult);
            setGame(new BullyBullyGame(20));
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <Center>
          <CountBullButtons
            onCount={(n) => {
              const g = Object.assign(new BullyBullyGame(20), game);
              g.addScore(n);
              setGame(g);
            }}
          />
        </Center>
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

const getResult = (game: BullyBullyGame) => `Total: ${game.getGameResult().result}`;

export default Main;
