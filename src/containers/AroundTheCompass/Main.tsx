'use client';
import React, { FC } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
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
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/db/db';
import AroundTheCompassGame from '@/lib/AroundTheCompassGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';
import { useTranslations } from 'next-intl';

const Main: FC = () => {
  const game = useAroundTheCompassGame();
  const setGame = useAroundTheCompassGameSet();
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const t = useTranslations('games.aroundthecompass');
  if (!game) return <MainTemplate label={'around-the-compass-main'} isLoading />;
  return (
    <MainTemplate label={'around-the-compass-main'}>
      {isMd ? (
        <DesktopMain game={game} setGame={setGame} user={user} description={t('description')} />
      ) : (
        <MobileMain game={game} setGame={setGame} user={user} description={t('description')} />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: AroundTheCompassGame;
  setGame: (game: AroundTheCompassGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <NewGame
          onNewGame={(r) => {
            if (game.isFinished())
              saveHistory(game.getGameResult(), db.aroundTheCompassResult, user);
            setGame(new AroundTheCompassGame(r));
          }}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <div className='flex gap-2'>
          <DescriptionModal
            header='Around The Compass'
            description={<p className='whitespace-pre-wrap'>{description}</p>}
          />
          <CameraView />
        </div>
      </div>
      <div className='flex items-center justify-around gap-2 p-4'>
        <div>
          <div className='flex items-end justify-center'>
            <TargetBoard
              message={`Round ${game.getRound()} / ${game.getTargetRound()}`}
              target={game.getCurrentTarget().toString()}
            />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </div>
          <MyRoundScore game={game} setGame={setGame} user={user} />
        </div>
        <div className='min-w-[250px]'>
          <CountButtons
            buttons={[12, 6, 4, 2, 1]}
            onCount={(n) =>
              updateObject(game, new AroundTheCompassGame(20), 'addScore', setGame, n)
            }
            full
          />
        </div>
      </div>
      <div className='p-4'>
        <RoundBoard score={game.getScore()} />
      </div>
    </>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full justify-between'>
        <NewGame
          onNewGame={(r) => {
            if (game.isFinished())
              saveHistory(game.getGameResult(), db.aroundTheCompassResult, user);
            setGame(new AroundTheCompassGame(r));
          }}
          isFinished={game.isFinished()}
          currentRound={game.getTargetRound()}
        />
        <div className='flex items-center gap-3'>
          <TargetBoard
            message={`Round ${game.getRound()} / ${game.getTargetRound()}`}
            target={game.getCurrentTarget().toString()}
          />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </div>
        <div className='flex flex-col'>
          <DescriptionModal
            header='Around The Compass'
            description={<p className='whitespace-pre-wrap'>{description}</p>}
          />
          <CameraView />
        </div>
      </div>
      <div className='px-2'>
        <MyRoundScore game={game} setGame={setGame} user={user} />
      </div>
      <div className='px-2'>
        <CountButtons
          buttons={[12, 6, 4, 2, 1]}
          onCount={(n) => updateObject(game, new AroundTheCompassGame(20), 'addScore', setGame, n)}
          full
        />
      </div>
      <div className='px-2'>
        <RoundBoard score={game.getScore()} />
      </div>
    </div>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame, user }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => updateObject(game, new AroundTheCompassGame(20), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new AroundTheCompassGame(20), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.aroundTheCompassResult, user);
      setGame(new AroundTheCompassGame(game.getTargetRound()));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: AroundTheCompassGame) =>
  `Round: ${game.getTargetRound()}\nTotal: ${game.getGameResult().result}`;

export default Main;
