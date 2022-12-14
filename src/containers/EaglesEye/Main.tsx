import React, { FC } from 'react';
import { Box, Text, Center, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import CameraView from '@/components/CameraView';
import CountBullButtons from '@/components/CountBullButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import NewGame from '@/containers/EaglesEye/NewGame';
import { useAuth } from '@/contexts/AuthContext';
import { useEaglesEyeGame, useEaglesEyeGameSet } from '@/contexts/EaglesEyeGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import EaglesEyeGame from '@/lib/EaglesEyeGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const EaglesEyeMain: FC = () => {
  const game = useEaglesEyeGame();
  const setGame = useEaglesEyeGameSet();
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'eagles-eye-main'} isLoading />;
  return (
    <MainTemplate label='eagles-eye-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.eagleseye.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.eagleseye.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: EaglesEyeGame;
  setGame: (game: EaglesEyeGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame
          onNewGame={() => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.eaglesEyeResult, user);
            setGame(new EaglesEyeGame());
          }}
          isFinished={game.isFinished()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={"Eagle's Eye"}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Grid templateRows={'repeat(3, auto)'} gap={10} justifyContent='center' p={10}>
        <GridItem>
          <Flex justifyContent='space-around' gap={10}>
            <TargetBoard
              message={`Round ${game.getRound()}`}
              target={game.getTotalScore().toString().padStart(3)}
            />
            <CountBullButtons
              onCount={(n) => updateObject(game, new EaglesEyeGame(), 'addScore', setGame, n)}
              disabled={game.getRoundScore().length >= 3}
            />
          </Flex>
        </GridItem>
        <GridItem maxW={1280}>
          <MyRoundScore game={game} setGame={setGame} user={user} />
        </GridItem>
        <GridItem>
          <RoundBoard score={game.getScore()} />
        </GridItem>
      </Grid>
    </>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <Grid gap={4} justifyItems='center'>
      <GridItem width='100%'>
        <Flex justifyContent='space-between'>
          <NewGame
            onNewGame={() => {
              if (game.isFinished()) saveHistory(game.getGameResult(), db.eaglesEyeResult, user);
              setGame(new EaglesEyeGame());
            }}
            isFinished={game.isFinished()}
          />
          <Box width='100%' pr='40px'>
            <Center>
              <TargetBoard
                message={`Round ${game.getRound()}`}
                target={game.getTotalScore().toString()}
              />
            </Center>
          </Box>
          <Flex direction='column'>
            <DescriptionModal
              header={"Eagle's Eye"}
              description={<Text whiteSpace='pre-wrap'>{description}</Text>}
            />
            <CameraView />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <MyRoundScore game={game} setGame={setGame} user={user} />
      </GridItem>
      <GridItem>
        <CountBullButtons
          onCount={(n) => updateObject(game, new EaglesEyeGame(), 'addScore', setGame, n)}
          disabled={game.getRoundScore().length >= 3}
        />
      </GridItem>
      <GridItem>
        <RoundBoard score={game.getScore()} />
      </GridItem>
    </Grid>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame, user }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => updateObject(game, new EaglesEyeGame(), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new EaglesEyeGame(), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.eaglesEyeResult, user);
      setGame(new EaglesEyeGame());
    }}
    result={getResult(game)}
  />
);

const getResult = (game: EaglesEyeGame) =>
  `Total: ${game.getGameResult().result}\nD-BULL: ${game
    .getGameResult()
    .scores.flat()
    .reduce((pre, crr) => pre + (crr === 'D-BULL' ? 1 : 0), 0)}\nS-BULL: ${game
    .getGameResult()
    .scores.flat()
    .reduce((pre, crr) => pre + (crr === 'S-BULL' ? 1 : 0), 0)}\n`;

export default EaglesEyeMain;
