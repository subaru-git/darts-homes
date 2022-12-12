import React, { FC } from 'react';
import { Box, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useAuth } from '@/contexts/AuthContext';
import {
  useTwoDartCombinationsGame,
  useTwoDartCombinationsGameSet,
} from '@/contexts/TwoDartCombinationsGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import TwoDartCombinationsGame from '@/lib/TwoDartCombinationsGame';
import MainTemplate from '@/templates/MainTemplate';

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
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'two-dart-combinations-main'} isLoading />;
  return (
    <MainTemplate label='two-dart-combinations-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.twodartcombinations.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.twodartcombinations.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: TwoDartCombinationsGame;
  setGame: (game: TwoDartCombinationsGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={() => setGame(new TwoDartCombinationsGame())}
          isFinished={game.isFinished()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={'Two-Dart Combinations'}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
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
          <MyRoundScore game={game} setGame={setGame} user={user} />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={arrange[game.getRound() - 1]}
            onCount={(n) =>
              updateObject(game, new TwoDartCombinationsGame(), 'addScore', setGame, n)
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

const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame
          onNewGame={() => setGame(new TwoDartCombinationsGame())}
          isFinished={game.isFinished()}
        />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Flex direction='column'>
          <DescriptionModal
            header={'Two-Dart Combinations'}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Box px={2}>
        <MyRoundScore game={game} setGame={setGame} user={user} />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={arrange[game.getRound() - 1]}
          onCount={(n) => updateObject(game, new TwoDartCombinationsGame(), 'addScore', setGame, n)}
          full
        />
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame, user }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => updateObject(game, new TwoDartCombinationsGame(), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new TwoDartCombinationsGame(), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.twoDartCombinationsResult, user);
      setGame(new TwoDartCombinationsGame());
    }}
    result={getResult(game)}
  />
);

const getResult = (game: TwoDartCombinationsGame) => `Total: ${game.getGameResult().result}`;

export default Main;
