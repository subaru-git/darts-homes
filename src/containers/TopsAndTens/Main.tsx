import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Description from './Description';
import NewGame from './NewGame';
import CountButtons from '@/components/CountButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useTopsAndTensGame, useTopsAndTensGameSet } from '@/contexts/TopsAndTensContext';
import { db } from '@/db/db';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';
import TopsAndTensGame from '@/lib/TopsAndTensGame/TopsAndTensGame';

const Main: FC = () => {
  const game = useTopsAndTensGame();
  const setGame = useTopsAndTensGameSet();
  return (
    <div data-cy='tops-and-tens-main'>
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

const DesktopMain: FC<{ game: TopsAndTensGame; setGame: (game: TopsAndTensGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new TopsAndTensGame(20))} />
        <Description />
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard
              message={`Round ${game.getRound()}`}
              target={game.getCurrentTarget().toString()}
            />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new TopsAndTensGame(20), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new TopsAndTensGame(20), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.topsAndTensResult);
              setGame(new TopsAndTensGame(20));
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[20, 10, 5]}
            onCount={(n) => {
              const g = Object.assign(new TopsAndTensGame(20), game);
              g.addScore(n);
              setGame(g);
            }}
            bull={false}
            other
          />
        </Box>
      </Flex>
      <Box p={4}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </div>
  );
};

const MobileMain: FC<{ game: TopsAndTensGame; setGame: (game: TopsAndTensGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame onNewGame={() => setGame(new TopsAndTensGame(20))} />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Description />
      </Flex>
      <Box px={2}>
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new TopsAndTensGame(20), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new TopsAndTensGame(20), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.topsAndTensResult);
            setGame(new TopsAndTensGame(20));
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={[20, 10, 5]}
          onCount={(n) => {
            const g = Object.assign(new TopsAndTensGame(20), game);
            g.addScore(n);
            setGame(g);
          }}
          bull={false}
          other
        />
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

const getResult = (game: TopsAndTensGame) => `Total: ${game.getGameResult().result}`;

export default Main;
