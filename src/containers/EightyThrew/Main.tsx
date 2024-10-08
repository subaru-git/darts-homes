'use client';
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
import { useEightyThrewGame, useEightyThrewGameSet } from '@/contexts/EightyThrewGameContext';
import { db } from '@/db/db';
import EightyThrewGame from '@/lib/EightyThrewGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';
import { useTranslations } from 'next-intl';

const Main: FC = () => {
  const game = useEightyThrewGame();
  const setGame = useEightyThrewGameSet();
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const t = useTranslations('games.eightythrew');
  if (!game) return <MainTemplate label={'eighty-threw-main'} isLoading />;
  return (
    <MainTemplate label='eighty-threw-main'>
      {isMd ? (
        <DesktopMain game={game} setGame={setGame} user={user} description={t('description')} />
      ) : (
        <MobileMain game={game} setGame={setGame} user={user} description={t('description')} />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: EightyThrewGame;
  setGame: (game: EightyThrewGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(targetRound) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.eightyThrewResult, user);
            setGame(new EightyThrewGame(targetRound));
          }}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={'Eighty Threw'}
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
            buttons={[20, 16, 11, 8, 4, 2, 1]}
            onCount={(n) => updateObject(game, new EightyThrewGame(20), 'addScore', setGame, n)}
            bull
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
          onNewGame={(targetRound) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.eightyThrewResult, user);
            setGame(new EightyThrewGame(targetRound));
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
            header={'Eighty Threw'}
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
          buttons={[20, 16, 11, 8, 4, 2, 1]}
          onCount={(n) => updateObject(game, new EightyThrewGame(20), 'addScore', setGame, n)}
          bull
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
    onClear={() => updateObject(game, new EightyThrewGame(20), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new EightyThrewGame(20), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.eightyThrewResult, user);
      setGame(new EightyThrewGame(game.getTargetRound()));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: EightyThrewGame) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
