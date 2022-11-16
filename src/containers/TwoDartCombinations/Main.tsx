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
  useTwoDartCombinationsGame,
  useTwoDartCombinationsGameSet,
} from '@/contexts/TwoDartCombinationsGameContext';
import { db } from '@/db/db';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';
import TwoDartCombinationsGame from '@/lib/TwoDartCombinationsGame/TwoDartCombinationsGame';

const arrange = [
  [17, 12],
  [16, 10],
  [20, 3],
  [20, 4],
  [16, 13],
  [20, 6],
  [20, 7],
  [16],
  [20, 9],
  [18, 16],
  [20, 11],
  [20, 12],
  [20, 13],
  [20, 14],
  [20, 15],
  [20, 16],
  [20, 17],
  [20, 18],
  [20, 19],
  [20],
];

const Main: FC = () => {
  const game = useTwoDartCombinationsGame();
  const setGame = useTwoDartCombinationsGameSet();
  return (
    <div data-cy='two-dart-combinations-main'>
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
  game: TwoDartCombinationsGame;
  setGame: (game: TwoDartCombinationsGame) => void;
}> = ({ game, setGame }) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={() => setGame(new TwoDartCombinationsGame())}
          isFinished={game.isFinish()}
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
              message={`Round ${game.getRound()}`}
              target={game.getCurrentTarget().toString()}
            />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new TwoDartCombinationsGame(), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new TwoDartCombinationsGame(), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.twoDartCombinationsResult);
              setGame(new TwoDartCombinationsGame());
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={arrange[game.getRound() - 1]}
            onCount={(n) => {
              const g = Object.assign(new TwoDartCombinationsGame(), game);
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
  game: TwoDartCombinationsGame;
  setGame: (game: TwoDartCombinationsGame) => void;
}> = ({ game, setGame }) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame
          onNewGame={() => setGame(new TwoDartCombinationsGame())}
          isFinished={game.isFinish()}
        />
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
            const g = Object.assign(new TwoDartCombinationsGame(), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new TwoDartCombinationsGame(), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.twoDartCombinationsResult);
            setGame(new TwoDartCombinationsGame());
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={arrange[game.getRound() - 1]}
          onCount={(n) => {
            const g = Object.assign(new TwoDartCombinationsGame(), game);
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

const getResult = (game: TwoDartCombinationsGame) => `Total: ${game.getGameResult().result}`;

export default Main;
