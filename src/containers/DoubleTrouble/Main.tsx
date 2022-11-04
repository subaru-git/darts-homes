import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
import DoubleTroubleGame from '@/lib/DoubleTroubleGame/DoubleTroubleGame';
import { saveDoubleTroubleHistory } from '@/lib/GameHistoryManager/GameHistory';

const Main: FC = () => {
  const game = useDoubleTroubleGame();
  const setGame = useDoubleTroubleGameSet();
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

const DesktopMain: FC<{ game: DoubleTroubleGame; setGame: (game: DoubleTroubleGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new DoubleTroubleGame())} />
        <Description />
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
              saveDoubleTroubleHistory(game.getGameResult());
              setGame(new DoubleTroubleGame());
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            begin={game.getCurrentTarget()}
            end={game.getCurrentTarget()}
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
        <Description />
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
            saveDoubleTroubleHistory(game.getGameResult());
            setGame(new DoubleTroubleGame());
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          begin={game.getCurrentTarget()}
          end={game.getCurrentTarget()}
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
