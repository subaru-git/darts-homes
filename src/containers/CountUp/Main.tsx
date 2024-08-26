'use client';
import React, { FC, useEffect, useState } from 'react';
import { Text, Box, Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import DescriptionModal from '@/components/DescriptionModal';
import EditableScoreBoard from '@/components/EditableScoreBoard/EditableScoreBoard';
import RoundOverDialog from '@/components/RoundOverDialog';
import TargetBoard from '@/components/TargetBoard';
import TenKey from '@/components/TenKey';
import { useAuth } from '@/contexts/AuthContext';
import { useCountUpGame, useCountUpGameSet } from '@/contexts/CountUpGameContext';
import { db } from '@/db/db';
import CountUpGame from '@/lib/CountUpGame/CountUpGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';
import { useTranslations } from 'next-intl';

const Main: FC = () => {
  const game = useCountUpGame();
  const setGame = useCountUpGameSet();
  const user = useAuth();
  const [scoreFocus, setScoreFocus] = useState(false);
  const isMd = useBreakpointValue({ base: false, md: true });
  const t = useTranslations('games.countup');
  if (!game) return <MainTemplate label={'count-up-main'} isLoading />;
  return (
    <MainTemplate label='count-up-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          scoreFocus={scoreFocus}
          setScoreFocus={setScoreFocus}
          description={t('description')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          scoreFocus={scoreFocus}
          setScoreFocus={setScoreFocus}
          description={t('description')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: CountUpGame;
  setGame: (game: CountUpGame) => void;
  user: User | null | undefined;
  scoreFocus?: boolean;
  setScoreFocus?: (focus: boolean) => void;
  description?: string;
};
const DesktopMain: FC<MainProps> = ({
  game,
  setGame,
  user,
  scoreFocus,
  setScoreFocus,
  description,
}) => {
  const [score, setScore] = useState<number | '-'>('-');
  const [isFinished, setIsFinished] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (game.isFinished() && !scoreFocus) setIsFinished(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });
  // When open dialog with keyboard, the dialog will cancel by keyboard same timing.
  // So, we need to open dialog later than input keyboard event.
  useEffect(() => {
    if (isFinished) onOpen();
    setIsFinished(false);
  }, [isFinished, onOpen]);
  return (
    <>
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
            <TargetBoard
              message={`Round ${game.isFinished() ? 'over' : game.getRound()}`}
              target={game.getTotalScore().toString()}
            />
            <TargetBoard message='Score' target={score.toString()} size='sm' />
          </Flex>
        </Box>
        <Box minWidth={250}>
          <TenKey
            onCount={(n) => {
              if (n !== '')
                updateObject(game, new CountUpGame(), 'addScoreNumber', setGame, parseInt(n));
              setScore('-');
              if (game.isFinished()) setIsFinished(true);
            }}
            disabled={game.isFinished()}
            force={game.isFinished()}
            onChange={(n) => {
              if (n === '') {
                setScore('-');
                return;
              }
              setScore(() => parseInt(n));
            }}
            keyboard={!scoreFocus && !game.isFinished()}
          />
        </Box>
      </Flex>
      <Box p={4}>
        <EditableScoreBoard
          score={game.getScoreNumber()}
          onChange={(score) => {
            updateObject(game, new CountUpGame(), 'setScoreNumber', setGame, score);
          }}
          setFocus={setScoreFocus ?? (() => {})}
        />
      </Box>
      <RoundOverDialog
        isOpen={isOpen}
        onClose={() => onClose()}
        onNewGame={() => {
          saveHistory(game.getGameResult(), db.countUpResult, user);
          setGame(new CountUpGame());
          setScore('-');
          onClose();
        }}
        result={getResult(game)}
      />
    </>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  const [score, setScore] = useState<number | '-'>('-');
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <TargetBoard
            message={`Round ${game.isFinished() ? 'over' : game.getRound()}`}
            target={game.getTotalScore().toString()}
          />
          <TargetBoard message='Score' target={score.toString()} size='sm' />
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
        <TenKey
          onCount={(n) => {
            if (n !== '')
              updateObject(game, new CountUpGame(), 'addScoreNumber', setGame, parseInt(n));
            setScore('-');
            if (game.isFinished()) onOpen();
          }}
          disabled={game.isFinished()}
          force={game.isFinished()}
          display={false}
          onChange={(n) => {
            if (n === '') {
              setScore('-');
              return;
            }
            setScore(() => parseInt(n));
          }}
          keyboard={false}
        />
      </Box>
      <Box p={2}>
        <EditableScoreBoard
          score={game.getScoreNumber()}
          onChange={(score) => {
            updateObject(game, new CountUpGame(), 'setScoreNumber', setGame, score);
          }}
        />
      </Box>
      <RoundOverDialog
        isOpen={isOpen}
        onClose={() => onClose()}
        onNewGame={() => {
          saveHistory(game.getGameResult(), db.countUpResult, user);
          setGame(new CountUpGame());
          setScore('-');
          onClose();
        }}
        result={getResult(game)}
      />
    </Flex>
  );
};

const getResult = (game: CountUpGame) => `Total: ${game.getGameResult().result}`;

export default Main;
