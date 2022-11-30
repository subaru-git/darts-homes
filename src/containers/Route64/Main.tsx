import React, { FC } from 'react';
import { Box, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useRoute64Game, useRoute64GameSet } from '@/contexts/Route64GameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import { saveToDB } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import Route64Game from '@/lib/Route64Game';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const game = useRoute64Game();
  const setGame = useRoute64GameSet();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'route-64-main'} isLoading />;
  return (
    <MainTemplate label='route-64-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          description={t.games.route64.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          description={t.games.route64.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: Route64Game;
  setGame: (game: Route64Game) => void;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(targetRound) => setGame(new Route64Game(targetRound))}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header='Route 64'
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
            buttons={[20, 16, 8, 4, 2, 1]}
            onCount={(n) => updateObject(game, new Route64Game(20), 'addScore', setGame, n)}
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
          onNewGame={(targetRound) => setGame(new Route64Game(targetRound))}
          isFinished={game.isFinished()}
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
            header='Route 64'
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
          buttons={[20, 16, 8, 4, 2, 1]}
          onCount={(n) => updateObject(game, new Route64Game(20), 'addScore', setGame, n)}
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
    onClear={() => updateObject(game, new Route64Game(20), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new Route64Game(20), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveToDB(game.getGameResult(), db.route64Result);
      setGame(new Route64Game(20));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: Route64Game) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
