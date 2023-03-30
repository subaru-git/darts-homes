import React, { FC } from 'react';
import { Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import ArrangeBoard from './ArrangeBoard';
import ArrangeScore from './ArrangeScore';
import ArrangeScoreBoard from './ArrangeScoreBoard';
import NewGame from './NewGame';
import Targets from './Targets';
import DescriptionModal from '@/components/DescriptionModal';
import RoundDisplay from '@/components/RoundDisplay';
import RoundScore from '@/components/RoundScore';
import ScoreBoard from '@/components/ScoreBoard';
import { useArrangeGame, useArrangeGameSet } from '@/contexts/ArrangeGameContext';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import ArrangeGame from '@/lib/ArrangeGame/';
import { saveHistory } from '@/lib/GameHistoryManager';
import { convertArrangeOutToGameScore, convertToFullWidth } from '@/lib/Helper/Converter';
import { toArrangeScoreBoard } from '@/lib/Helper/Format';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const user = useAuth();
  const game = useArrangeGame();
  const setGame = useArrangeGameSet();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'arrange-main'} isLoading />;
  return (
    <MainTemplate label='arrange-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.arrange.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.arrange.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: ArrangeGame;
  setGame: (game: ArrangeGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(settings) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.arrangeResult, user);
            setGame(new ArrangeGame(settings));
          }}
          isFinished={game.isFinished()}
          currentSettings={game.getSettings()}
        />
        <DescriptionModal
          header={'Arrange'}
          description={<Text whiteSpace='pre-wrap'>{description}</Text>}
        />
      </Flex>
      <div className='flex flex-col gap-4'>
        <Flex gap={20} justifyContent='center'>
          <Flex direction='column' alignItems='center' gap={4} justifyContent='center'>
            {game.getSettings().game && game.getSettings().hard ? (
              <ScoreBoard
                data={convertArrangeOutToGameScore({
                  ...game.getArrangeScore()[0],
                  score: game
                    .getArrangeScore()[0]
                    .score.slice(0, game.getArrangeScore()[0].score.length - 1),
                })}
              />
            ) : (
              <>
                <ArrangeScore
                  score={`${
                    game.getCurrentTarget() === -1
                      ? 'BUST'
                      : game.getCurrentTarget() === 0
                      ? 'NICE'
                      : game.getCurrentTarget()
                  }`}
                  round={`${
                    game.getCurrentTarget() === -1
                      ? 'BUST'
                      : game.getCurrentTarget() === 0
                      ? 'NICE'
                      : game.getCurrentRoundTarget()
                  }`}
                  pro={game.getSettings().pro}
                />
                <RoundDisplay
                  count={game.getSettings().hard ? game.getDartsCount() : game.getRoundCount()}
                  round={game.getSettings().hard ? false : true}
                />
                <Targets
                  count={game.getTargetOutCount()}
                  targets={
                    game.getSettings().game
                      ? [...game.getTargets(), [] as unknown as number]
                      : game.getTargets()
                  }
                  isFinished={game.getSettings().game ? false : game.isFinished()}
                />
              </>
            )}
            <MyRoundScore game={game} setGame={setGame} user={user} />
          </Flex>
          <ArrangeBoard
            onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
            range={game.getSettings().range}
            simulation={game.getSettings().simulation}
            hard={game.getSettings().hard}
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
            roundVectors={[...game.getVectors()]}
            onLanding={(n) => updateObject(game, new ArrangeGame(), 'addVector', setGame, n)}
          />
        </Flex>
        {game.getSettings().game && game.getSettings().hard ? null : (
          <div className='max-h-[30vh] overflow-y-scroll px-2'>
            <ArrangeScoreBoard
              score={toArrangeScoreBoard(game.getArrangeScore(), game.isFinished())}
            />
          </div>
        )}
      </div>
    </>
  );
};
const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      {game.getSettings().game && game.getSettings().hard ? (
        <MobileGameDisplay game={game} setGame={setGame} user={user} description={description} />
      ) : (
        <MobileMainDisplay game={game} setGame={setGame} user={user} description={description} />
      )}
    </>
  );
};

const MobileMainDisplay: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <Flex direction='column' pb={2}>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(settings) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.arrangeResult, user);
            setGame(new ArrangeGame(settings));
          }}
          isFinished={game.isFinished()}
          currentSettings={game.getSettings()}
        />
        <Targets
          count={game.getTargetOutCount()}
          targets={game.getTargets()}
          isFinished={game.isFinished()}
        />
        <DescriptionModal
          header={'Arrange'}
          description={<Text whiteSpace='pre-wrap'>{description}</Text>}
        />
      </Flex>
      <Flex direction='column' alignItems='center' gap={2} justifyContent='center'>
        <Grid
          templateColumns='repeat(5, 1fr)'
          justifyContent='space-around'
          alignItems='end'
          gap={4}
          w='100%'
        >
          <GridItem colSpan={4} colStart={1}>
            <div className='flex h-24 items-center justify-center'>
              <ArrangeScore
                score={`${
                  game.getCurrentTarget() === -1
                    ? 'BUST'
                    : game.getCurrentTarget() === 0
                    ? 'NICE'
                    : game.getCurrentTarget()
                }`}
                round={`${
                  game.getCurrentTarget() === -1
                    ? 'BUST'
                    : game.getCurrentTarget() === 0
                    ? 'NICE'
                    : game.getCurrentRoundTarget()
                }`}
                pro={game.getSettings().pro}
              />
            </div>
          </GridItem>
          <GridItem colStart={5} mx={1}>
            <RoundDisplay
              count={game.getSettings().hard ? game.getDartsCount() : game.getRoundCount()}
              round={game.getSettings().hard ? false : true}
              size='sm'
            />
          </GridItem>
        </Grid>
        <MyRoundScore game={game} setGame={setGame} user={user} />
        <ArrangeBoard
          onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          hard={game.getSettings().hard}
          disabled={game.getRoundScore().length >= 3 || game.isFinished()}
          roundVectors={[...game.getVectors()]}
          onLanding={(n) => updateObject(game, new ArrangeGame(), 'addVector', setGame, n)}
        />
        <div className='max-h-[30vh] overflow-y-scroll px-2'>
          <ArrangeScoreBoard
            score={toArrangeScoreBoard(game.getArrangeScore(), game.isFinished())}
          />
        </div>
      </Flex>
    </Flex>
  );
};

const MobileGameDisplay: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <Flex direction='column' pb={2}>
      <Flex justifyContent='space-between' alignItems='top'>
        <NewGame
          onNewGame={(settings) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.arrangeResult, user);
            setGame(new ArrangeGame(settings));
          }}
          isFinished={game.isFinished()}
          currentSettings={game.getSettings()}
        />
        <div className='mb-1 mt-3 max-h-[50vw] w-full overflow-x-clip overflow-y-scroll'>
          <ScoreBoard
            data={convertArrangeOutToGameScore({
              ...game.getArrangeScore()[0],
              score: game
                .getArrangeScore()[0]
                .score.slice(0, game.getArrangeScore()[0].score.length - 1),
            })}
          />
        </div>
        <DescriptionModal
          header={'Arrange'}
          description={<Text whiteSpace='pre-wrap'>{description}</Text>}
        />
      </Flex>
      <Flex direction='column' alignItems='center' gap={2} justifyContent='center'>
        <MyRoundScore game={game} setGame={setGame} user={user} />
        <ArrangeBoard
          onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          hard={game.getSettings().hard}
          disabled={game.getRoundScore().length >= 3 || game.isFinished()}
        />
      </Flex>
    </Flex>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame, user }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => {
      updateObject(game, new ArrangeGame(), 'removeScore', setGame);
      updateObject(game, new ArrangeGame(), 'removeVectors', setGame);
    }}
    onRoundChange={() => updateObject(game, new ArrangeGame(), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.arrangeResult, user);
      setGame(new ArrangeGame(game.getSettings()));
    }}
    result={getResult(game)}
    pro={game.getSettings().pro}
  />
);

const getResult = (game: ArrangeGame) => {
  if (game.getSettings().game) {
    const res = `${convertArrangeOutToGameScore(game.getArrangeScore()[0])
      .map((s, i) => {
        if (i === 0) return convertToFullWidth(`.  :${s.ToGo}`);
        return convertToFullWidth(
          `${s.Scored.padStart(3, ' ')}:${s.ToGo.padStart(3, ' ')}:(${s.Hits?.join(',')})`,
        );
      })
      .join('\n')}`;
    return res;
  }
  return `[${game.getTargets().join(', ')}]\n${game.getRoundCount()} Round`;
};

export default Main;
