import React, { FC } from 'react';
import { Box, Center, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountBullButtons from '@/components/CountBullButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useAuth } from '@/contexts/AuthContext';
import { useBullyBullyGame, useBullyBullyGameSet } from '@/contexts/BullyBullyGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import BullyBullyGame from '@/lib/BullyBullyGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const user = useAuth();
  const game = useBullyBullyGame();
  const setGame = useBullyBullyGameSet();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'bully-bully-main'} isLoading />;
  return (
    <MainTemplate label='bully-bully-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          description={t.games.bullybully.description.join('\n')}
          user={user}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          description={t.games.bullybully.description.join('\n')}
          user={user}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: BullyBullyGame;
  setGame: (game: BullyBullyGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(r) => setGame(new BullyBullyGame(r))}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={'Bully Bully'}
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
              target='BULL'
            />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <MyRoundScore game={game} setGame={setGame} user={user} />
        </Box>
        <Box minWidth={250}>
          <CountBullButtons
            onCount={(n) => updateObject(game, new BullyBullyGame(20), 'addScore', setGame, n)}
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
          onNewGame={(round) => setGame(new BullyBullyGame(round))}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message={`Round ${game.getRound()}`} target='BULL' />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Flex direction='column'>
          <DescriptionModal
            header={'Bully Bully'}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Box px={2}>
        <MyRoundScore game={game} setGame={setGame} user={user} />
      </Box>
      <Box px={2}>
        <Center>
          <CountBullButtons
            onCount={(n) => updateObject(game, new BullyBullyGame(20), 'addScore', setGame, n)}
          />
        </Center>
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
    onClear={() => updateObject(game, new BullyBullyGame(20), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new BullyBullyGame(20), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.bullyBullyResult, user);
      setGame(new BullyBullyGame(20));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: BullyBullyGame) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
