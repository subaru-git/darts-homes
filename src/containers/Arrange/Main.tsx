import React, { FC } from 'react';
import { Center, Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import ArrangeBoard from './ArrangeBoard';
import NewGame from './NewGame';
import Targets from './Targets';
import DescriptionModal from '@/components/DescriptionModal';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useArrangeGame, useArrangeGameSet } from '@/contexts/ArrangeGameContext';
import useLocale from '@/hooks/locale';
import ArrangeGame from '@/lib/ArrangeGame/ArrangeGame';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
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
          description={t.games.arrange.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          description={t.games.arrange.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: ArrangeGame;
  setGame: (game: ArrangeGame) => void;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={(settings) => setGame(new ArrangeGame(settings))}
          isFinished={game.isFinish()}
          currentSettings={game.getSettings()}
        />
        <DescriptionModal
          header={'Arrange'}
          description={<Text whiteSpace='pre-wrap'>{description}</Text>}
        />
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
          onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          disabled={game.getRoundScore().length >= 3 || game.isFinish()}
        />
      </Flex>
      <MyRoundScore game={game} setGame={setGame} />
    </>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, description }) => {
  return (
    <Flex direction='column' pb={2}>
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
          onCount={(n) => updateObject(game, new ArrangeGame(), 'addScore', setGame, n)}
          range={game.getSettings().range}
          simulation={game.getSettings().simulation}
          disabled={game.getRoundScore().length >= 3 || game.isFinish()}
        />
        <MyRoundScore game={game} setGame={setGame} />
      </Flex>
    </Flex>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => updateObject(game, new ArrangeGame(), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new ArrangeGame(), 'roundChange', setGame)}
    isFinished={game.isFinish()}
    onRoundOver={() => {
      setGame(new ArrangeGame());
    }}
    result={getResult(game)}
  />
);

const getResult = (game: ArrangeGame) =>
  `[${game.getTargets().join(', ')}]\n${game.getRoundCount()} Round`;

export default Main;
