import React, { FC, useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import ArrangeBoard from './ArrangeBoard';
import ArrangeScore from './ArrangeScore';
import ArrangeScoreBoard from './ArrangeScoreBoard';
import NewGame from './NewGame';
import Targets from './Targets';
import CheckButton from '@/atoms/CheckButton/CheckButton';
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
  const [isThePower, setThePower] = useState(false);
  useEffect(() => {
    if (!enablePower(game)) setThePower(false);
  }, [game]);
  if (!game) return <MainTemplate label={'arrange-main'} isLoading />;
  return (
    <MainTemplate label='arrange-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.arrange.description.join('\n')}
          isThePower={isThePower}
          setThePower={setThePower}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.arrange.description.join('\n')}
          isThePower={isThePower}
          setThePower={setThePower}
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
  isThePower?: boolean;
  setThePower?: (isThePower: boolean) => void;
};

const DesktopMain: FC<MainProps> = ({
  game,
  setGame,
  user,
  description,
  isThePower,
  setThePower,
}) => {
  return (
    <>
      <div className='flex items-center justify-between'>
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
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-center gap-10'>
          <div className='flex flex-col items-center justify-center gap-4'>
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
                <div>
                  <div className='flex justify-end' hidden={!enablePower(game)}>
                    <CheckButton
                      color='orange'
                      onClick={() => setThePower?.(!isThePower)}
                      checked={isThePower}
                    >
                      <AiOutlineThunderbolt />
                      The Power
                    </CheckButton>
                  </div>
                  <div className='h-[250px] min-w-[400px]'>
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
                </div>
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
          </div>
          <ArrangeBoard
            onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
            range={game.getSettings().range}
            simulation={game.getSettings().simulation}
            hard={game.getSettings().hard}
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
            thePower={isThePower}
            roundVectors={[...game.getVectors()]}
            onLanding={(n) => updateObject(game, new ArrangeGame(), 'addVector', setGame, n)}
          />
        </div>
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
const MobileMain: FC<MainProps> = ({
  game,
  setGame,
  user,
  description,
  isThePower,
  setThePower,
}) => {
  return (
    <>
      {game.getSettings().game && game.getSettings().hard ? (
        <MobileGameDisplay game={game} setGame={setGame} user={user} description={description} />
      ) : (
        <MobileMainDisplay
          game={game}
          setGame={setGame}
          user={user}
          description={description}
          isThePower={isThePower}
          setThePower={setThePower}
        />
      )}
    </>
  );
};

const MobileMainDisplay: FC<MainProps> = ({
  game,
  setGame,
  user,
  description,
  isThePower,
  setThePower,
}) => {
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
            <div className='flex h-full flex-col justify-between'>
              <div className='flex justify-center pb-4' hidden={!enablePower(game)}>
                <CheckButton
                  color='orange'
                  onClick={() => setThePower?.(!isThePower)}
                  checked={isThePower}
                >
                  <AiOutlineThunderbolt />
                </CheckButton>
              </div>
              <RoundDisplay
                count={game.getSettings().hard ? game.getDartsCount() : game.getRoundCount()}
                round={game.getSettings().hard ? false : true}
                size='sm'
              />
            </div>
          </GridItem>
        </Grid>
        <MyRoundScore game={game} setGame={setGame} user={user} />
        <ArrangeBoard
          onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          hard={game.getSettings().hard}
          disabled={game.getRoundScore().length >= 3 || game.isFinished()}
          thePower={isThePower}
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

const enablePower = (game: ArrangeGame | null) => {
  if (!game) return false;
  if (game.getCurrentTarget() > 40 && game.getSettings().hard) return false;
  if (game.getCurrentTarget() > 50 && !game.getSettings().hard) return false;
  return true;
};

export default Main;
