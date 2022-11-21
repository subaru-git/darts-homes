import React, { FC } from 'react';
import { Center, Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import ArrangeBoard from './ArrangeBoard';
import Description from './Description';
import NewGame from './NewGame';
import Targets from './Targets';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useArrangeGame, useArrangeGameSet } from '@/contexts/ArrangeGameContext';
import ArrangeGame from '@/lib/ArrangeGame/ArrangeGame';

const Main: FC = () => {
  const game = useArrangeGame();
  const setGame = useArrangeGameSet();
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <div data-cy='arrange-main'>
      <NavigationBar />
      {!game ? (
        <Loading />
      ) : isMd ? (
        <DesktopMain game={game} setGame={setGame} />
      ) : (
        <MobileMain game={game} setGame={setGame} />
      )}
      <Footer />
    </div>
  );
};

const DesktopMain: FC<{ game: ArrangeGame; setGame: (game: ArrangeGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(settings) => setGame(new ArrangeGame(settings))}
          isFinished={game.isFinish()}
          currentSettings={game.getSettings()}
        />
        <Description />
      </Flex>
      <Flex gap={4} justifyContent='space-around'>
        <Flex direction='column' alignItems='center' gap={4} justifyContent='center'>
          <TargetBoard
            message='Target'
            target={`${
              game.getCurrentTarget() === -1
                ? 'BUST'
                : game.getCurrentTarget() === 0
                ? 'NICE'
                : game.getCurrentTarget()
            }`}
          />
          <Flex gap={4} justifyContent='space-around'>
            <Text fontSize='32px' color='green.500' fontWeight='bold'>
              Round
            </Text>
            <Text fontSize='32px' fontWeight='bold' color='gray.500'>
              {game.getRoundCount()}
            </Text>
          </Flex>
          <Targets
            count={game.getTargetOutCount()}
            targets={game.getTargets()}
            isFinished={game.isFinish()}
          />
        </Flex>
        <ArrangeBoard
          onCount={(count) => {
            const g = Object.assign(new ArrangeGame(), game);
            g.addScore(count);
            setGame(g);
          }}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          disabled={game.getRoundScore().length >= 3 || game.isFinish()}
        />
      </Flex>
      <RoundScore
        scores={game.getRoundScore()}
        onClear={() => {
          const g = Object.assign(new ArrangeGame(), game);
          g.removeScore();
          setGame(g);
        }}
        onRoundChange={() => {
          const g = Object.assign(new ArrangeGame(), game);
          g.roundChange();
          setGame(g);
        }}
        isFinished={game.isFinish()}
        onRoundOver={() => {
          // saveToDB(game.getGameResult(), db.bullyBullyResult);
          setGame(new ArrangeGame());
        }}
        result={getResult(game)}
      />
    </>
  );
};

const MobileMain: FC<{ game: ArrangeGame; setGame: (game: ArrangeGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Flex direction='column'>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(settings) => setGame(new ArrangeGame(settings))}
          isFinished={game.isFinish()}
          currentSettings={game.getSettings()}
        />
        <Targets
          count={game.getTargetOutCount()}
          targets={game.getTargets()}
          isFinished={game.isFinish()}
        />
        <Description />
      </Flex>
      <Flex direction='column' alignItems='center' gap={2} justifyContent='center'>
        <Grid
          templateColumns='repeat(5, 1fr)'
          justifyContent='space-around'
          alignItems='end'
          gap={4}
          w='100%'
        >
          <GridItem colSpan={3} colStart={2}>
            <Center>
              <TargetBoard
                message='Target'
                target={`${
                  game.getCurrentTarget() === -1
                    ? 'BUST'
                    : game.getCurrentTarget() === 0
                    ? 'NICE'
                    : game.getCurrentTarget()
                }`}
              />
            </Center>
          </GridItem>
          <GridItem colStart={5}>
            <Flex direction='column'>
              <Text fontSize='18px' color='green.500' fontWeight='bold'>
                Round
              </Text>
              <Text fontSize='18px' fontWeight='bold' textAlign='center'>
                {game.getRoundCount()}
              </Text>
            </Flex>
          </GridItem>
        </Grid>
        <ArrangeBoard
          onCount={(count) => {
            const g = Object.assign(new ArrangeGame(), game);
            g.addScore(count);
            setGame(g);
          }}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          disabled={game.getRoundScore().length >= 3 || game.isFinish()}
        />
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new ArrangeGame(), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new ArrangeGame(), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            // saveToDB(game.getGameResult(), db.bullyBullyResult);
            setGame(new ArrangeGame());
          }}
          result={getResult(game)}
        />
      </Flex>
    </Flex>
  );
};

const getResult = (game: ArrangeGame) =>
  `[${game.getTargets().join(', ')}]\n${game.getRoundCount()} Round`;

export default Main;
