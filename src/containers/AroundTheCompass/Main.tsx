import React, { FC } from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import {
  useAroundTheCompassGame,
  useAroundTheCompassGameSet,
} from '@/contexts/AroundTheCompassGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import AroundTheCompassGame from '@/lib/AroundTheCompassGame/AroundTheCompassGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const game = useAroundTheCompassGame();
  const setGame = useAroundTheCompassGameSet();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'around-the-compass-main'} isLoading />;
  return (
    <MainTemplate label={'around-the-compass-main'}>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          description={t.games.aroundthecompass.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          description={t.games.aroundthecompass.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: AroundTheCompassGame;
  setGame: (game: AroundTheCompassGame) => void;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(r) => setGame(new AroundTheCompassGame(r))}
          isFinished={game.isFinish()}
          currentRound={game.getTargetRound()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header='Around The Compass'
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
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
          <MyRoundScore game={game} setGame={setGame} />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[12, 6, 4, 2, 1]}
            onCount={(n) =>
              updateObject(game, new AroundTheCompassGame(20), 'addScore', setGame, n)
            }
            full
          />
        </Box>
      </Flex>
      <Box p={4}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, description }) => {
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
          <DescriptionModal
            header='Around The Compass'
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Box px={2}>
        <MyRoundScore game={game} setGame={setGame} />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={[12, 6, 4, 2, 1]}
          onCount={(n) => updateObject(game, new AroundTheCompassGame(20), 'addScore', setGame, n)}
          full
        />
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => updateObject(game, new AroundTheCompassGame(20), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new AroundTheCompassGame(20), 'roundChange', setGame)}
    isFinished={game.isFinish()}
    onRoundOver={() => {
      saveToDB(game.getGameResult(), db.aroundTheCompassResult);
      setGame(new AroundTheCompassGame(game.getTargetRound()));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: AroundTheCompassGame) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
