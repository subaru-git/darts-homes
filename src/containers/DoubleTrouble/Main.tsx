import React, { FC } from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import NewGame from '@/containers/DoubleTrouble/NewGame';
import { useDoubleTroubleGame, useDoubleTroubleGameSet } from '@/contexts/DoubleTroubleGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import DoubleTroubleGame from '@/lib/DoubleTroubleGame/DoubleTroubleGame';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const game = useDoubleTroubleGame();
  const setGame = useDoubleTroubleGameSet();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'double-trouble-main'} isLoading />;
  return (
    <MainTemplate label='double-trouble-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          description={t.games.doubletrouble.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          description={t.games.doubletrouble.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: DoubleTroubleGame;
  setGame: (game: DoubleTroubleGame) => void;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new DoubleTroubleGame())} isFinished={game.isFinish()} />
        <Flex gap={2}>
          <DescriptionModal
            header='Double Trouble'
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <MyRoundScore game={game} setGame={setGame} />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[game.getCurrentTarget()]}
            onCount={(n) => updateObject(game, new DoubleTroubleGame(), 'addScore', setGame, n)}
            other
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
        <NewGame onNewGame={() => setGame(new DoubleTroubleGame())} isFinished={game.isFinish()} />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Flex direction='column'>
          <DescriptionModal
            header='Double Trouble'
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
          buttons={[game.getCurrentTarget()]}
          onCount={(n) => updateObject(game, new DoubleTroubleGame(), 'addScore', setGame, n)}
          other
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
    onClear={() => updateObject(game, new DoubleTroubleGame(), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new DoubleTroubleGame(), 'roundChange', setGame)}
    isFinished={game.isFinish()}
    onRoundOver={() => {
      saveToDB(game.getGameResult(), db.doubleTroubleResult);
      setGame(new DoubleTroubleGame());
    }}
    result={getResult(game)}
  />
);

const getResult = (game: DoubleTroubleGame) => `Total: ${game.getGameResult().result}`;

export default Main;
