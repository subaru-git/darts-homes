import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import Description from '@/containers/DoubleTrouble/Description';
import NewGame from '@/containers/DoubleTrouble/NewGame';
import { useDoubleTroubleGame, useDoubleTroubleGameSet } from '@/contexts/DoubleTroubleGameContext';
import { db } from '@/db/db';
import DoubleTroubleGame from '@/lib/DoubleTroubleGame/DoubleTroubleGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';

const Main: FC = () => {
  const game = useDoubleTroubleGame();
  const setGame = useDoubleTroubleGameSet();
  return (
    <div data-cy='double-trouble-main'>
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

const DesktopMain: FC<{ game: DoubleTroubleGame; setGame: (game: DoubleTroubleGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new DoubleTroubleGame())} />
        <Flex gap={2}>
          <Description />
          <CameraView />
        </Flex>
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new DoubleTroubleGame(), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new DoubleTroubleGame(), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.doubleTroubleResult);
              setGame(new DoubleTroubleGame());
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[game.getCurrentTarget()]}
            onCount={(n) => {
              const g = Object.assign(new DoubleTroubleGame(), game);
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

const MobileMain: FC<{ game: DoubleTroubleGame; setGame: (game: DoubleTroubleGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame onNewGame={() => setGame(new DoubleTroubleGame())} />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Flex direction='column'>
          <Description />
          <CameraView />
        </Flex>
      </Flex>
      <Box px={2}>
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new DoubleTroubleGame(), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new DoubleTroubleGame(), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.doubleTroubleResult);
            setGame(new DoubleTroubleGame());
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={[game.getCurrentTarget()]}
          onCount={(n) => {
            const g = Object.assign(new DoubleTroubleGame(), game);
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

const getResult = (game: DoubleTroubleGame) => `Total: ${game.getGameResult().result}`;

export default Main;
