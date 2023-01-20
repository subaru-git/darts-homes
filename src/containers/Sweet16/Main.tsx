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
import { useSweet16Game, useSweet16GameSet } from '@/contexts/Sweet16Context';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import Sweet16Game from '@/lib/Sweet16Game';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const game = useSweet16Game();
  const setGame = useSweet16GameSet();
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'sweet16-main'} isLoading />;
  return (
    <MainTemplate label='sweet16-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.sweet16.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.sweet16.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: Sweet16Game;
  setGame: (game: Sweet16Game) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(targetCount) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.sweet16Result, user);
            setGame(new Sweet16Game(targetCount));
          }}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={'Sweet 16'}
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
          <MyRoundScore game={game} setGame={setGame} user={user} />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[16, 8, 4, 2, 1]}
            onCount={(n) => updateObject(game, new Sweet16Game(20), 'addScore', setGame, n)}
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
          onNewGame={(targetCount) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.sweet16Result, user);
            setGame(new Sweet16Game(targetCount));
          }}
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
            header={'Sweet 16'}
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
          buttons={[16, 8, 4, 2, 1]}
          onCount={(n) => updateObject(game, new Sweet16Game(20), 'addScore', setGame, n)}
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
    onClear={() => updateObject(game, new Sweet16Game(20), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new Sweet16Game(20), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.sweet16Result, user);
      setGame(new Sweet16Game(game.getTargetRound()));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: Sweet16Game) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
