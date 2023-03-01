import React, { FC, useState } from 'react';
import { Text, Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import TenKey from '@/components/TenKey';
import { useAuth } from '@/contexts/AuthContext';
import { useCountUpGame, useCountUpGameSet } from '@/contexts/CountUpGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import CountUpGame from '@/lib/CountUpGame/CountUpGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const game = useCountUpGame();
  const setGame = useCountUpGameSet();
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'count-up-main'} isLoading />;
  return (
    <MainTemplate label='count-up-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.countup.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.countup.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: CountUpGame;
  setGame: (game: CountUpGame) => void;
  user: User | null | undefined;
  description?: string;
};
const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  const [score, setScore] = useState<number | '-'>(game.getRoundScoreNumber() ?? '-');
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={() => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.countUpResult, user);
            setGame(new CountUpGame());
            setScore('-');
          }}
          isFinished={game.isFinished()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={'Count Up'}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard message={`Round ${game.getRound()}`} target={score.toString()} />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <MyRoundScore
            game={game}
            setGame={setGame}
            user={user}
            score={score}
            setScore={setScore}
            keyboard={score !== '-'}
          />
        </Box>
        <Box minWidth={250}>
          <TenKey
            onCount={(n) => {
              setScore(() => parseInt(n));
              updateObject(game, new CountUpGame(), 'addRoundScoreNumber', setGame, parseInt(n));
            }}
            keyboard={score === '-'}
          />
        </Box>
      </Flex>
      <Box p={4}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </div>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  const [score, setScore] = useState<number | '-'>(game.getRoundScoreNumber() ?? '-');
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame
          onNewGame={() => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.countUpResult, user);
            setGame(new CountUpGame());
            setScore('-');
          }}
          isFinished={game.isFinished()}
        />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message={`Round ${game.getRound()}`} target={score.toString()} />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Flex direction='column'>
          <DescriptionModal
            header={'Count Up'}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Box px={2}>
        <MyRoundScore
          game={game}
          setGame={setGame}
          user={user}
          score={score}
          setScore={setScore}
          keyboard={false}
        />
      </Box>
      <Box px={2}>
        <TenKey
          onCount={(n) => {
            setScore(() => parseInt(n));
            updateObject(game, new CountUpGame(), 'addRoundScoreNumber', setGame, parseInt(n));
          }}
          keyboard={false}
        />
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

type RoundScoreProps = MainProps & {
  score: number | '-';
  setScore: (score: number | '-') => void;
  keyboard: boolean;
};

const MyRoundScore: FC<RoundScoreProps> = ({ game, setGame, user, score, setScore, keyboard }) => (
  <RoundScore
    scores={score === '-' ? [] : ['', score.toString(), '']}
    onClear={() => {
      updateObject(game, new CountUpGame(), 'removeScore', setGame);
      setScore('-');
    }}
    onRoundChange={() => {
      updateObject(game, new CountUpGame(), 'roundChange', setGame);
      setScore('-');
    }}
    isFinished={game.getRound() === 8 && score !== '-'}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.countUpResult, user);
      setGame(new CountUpGame());
      setScore('-');
    }}
    result={getResult(game)}
    keyboard={keyboard}
  />
);

const getResult = (game: CountUpGame) => `Total: ${game.getGameResult().result}`;

export default Main;
