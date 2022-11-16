import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Description from './Description';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import {
  useAroundTheCompassGame,
  useAroundTheCompassGameSet,
} from '@/contexts/AroundTheCompassGameContext';
import { db } from '@/db/db';
import AroundTheCompassGame from '@/lib/AroundTheCompassGame/AroundTheCompassGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';

const Main: FC = () => {
  const game = useAroundTheCompassGame();
  const setGame = useAroundTheCompassGameSet();
  return (
    <div data-cy='around-the-compass-main'>
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
  game: AroundTheCompassGame;
  setGame: (game: AroundTheCompassGame) => void;
}> = ({ game, setGame }) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(TargetRound) => setGame(new AroundTheCompassGame(TargetRound))}
          isFinished={game.isFinish()}
          currentRound={game.getTargetRound()}
        />
        <Flex gap={2}>
          <Description />
          <CameraView />
        </Flex>
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard
              message={`Round ${game.getRound()} / ${game.getTargetRound()}`}
              target={game.getCurrentTarget().toString()}
            />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new AroundTheCompassGame(20), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new AroundTheCompassGame(20), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.aroundTheCompassResult);
              setGame(new AroundTheCompassGame(game.getTargetRound()));
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[12, 6, 4, 2, 1]}
            onCount={(n) => {
              const g = Object.assign(new AroundTheCompassGame(20), game);
              g.addScore(n);
              setGame(g);
            }}
            bull={false}
            full
          />
        </Box>
      </Flex>
      <Box p={4}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </div>
  );
};

const MobileMain: FC<{
  game: AroundTheCompassGame;
  setGame: (game: AroundTheCompassGame) => void;
}> = ({ game, setGame }) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame
          onNewGame={(TargetRound) => setGame(new AroundTheCompassGame(TargetRound))}
          isFinished={game.isFinish()}
          currentRound={game.getTargetRound()}
        />
        <Flex alignItems='center' gap={4}>
          <TargetBoard
            message={`Round ${game.getRound()} / ${game.getTargetRound()}`}
            target={game.getCurrentTarget().toString()}
          />
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
            const g = Object.assign(new AroundTheCompassGame(20), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new AroundTheCompassGame(20), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.aroundTheCompassResult);
            setGame(new AroundTheCompassGame(game.getTargetRound()));
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={[12, 6, 4, 2, 1]}
          onCount={(n) => {
            const g = Object.assign(new AroundTheCompassGame(20), game);
            g.addScore(n);
            setGame(g);
          }}
          bull={false}
          full
        />
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

const getResult = (game: AroundTheCompassGame) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
