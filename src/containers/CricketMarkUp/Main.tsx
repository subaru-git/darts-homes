import React, { FC } from 'react';
import { Box, Text, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import Board from './Board';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import DescriptionModal from '@/components/DescriptionModal';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useAuth } from '@/contexts/AuthContext';
import { useCricketMarkUpGame, useCricketMarkUpGameSet } from '@/contexts/CricketMarkUpGameContext';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';
import CricketMarkUpGame from '@/lib/CricketMarkUpGame';
import { saveHistory } from '@/lib/GameHistoryManager';
import { updateObject } from '@/lib/Helper/updateObjectState';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const game = useCricketMarkUpGame();
  const setGame = useCricketMarkUpGameSet();
  const user = useAuth();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  if (!game) return <MainTemplate label={'cricket-mark-up-main'} isLoading />;
  return (
    <MainTemplate label='cricket-mark-up-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.cricketmarkup.description.join('\n')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          user={user}
          description={t.games.cricketmarkup.description.join('\n')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: CricketMarkUpGame;
  setGame: (game: CricketMarkUpGame) => void;
  user: User | null | undefined;
  description?: string;
};

const DesktopMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <div>
      <Flex justifyContent='space-between'>
        <NewGame
          onNewGame={(targetCount) => {
            if (game.isFinished()) saveHistory(game.getGameResult(), db.cricketMarkUpResult, user);
            setGame(new CricketMarkUpGame(targetCount));
          }}
          currentTargetCount={game.getTargetCount()}
          isFinished={game.isFinished()}
        />
        <Flex gap={2}>
          <DescriptionModal
            header={'Cricket Mark-Up'}
            description={<Text whiteSpace='pre-wrap'>{description}</Text>}
          />
          <CameraView />
        </Flex>
      </Flex>
      <Grid templateColumns='repeat(2, auto)' gap={6} p={4}>
        <GridItem>
          <Grid templateRows='repeat(3, auto)' gap={10}>
            <GridItem>
              <Grid templateColumns='repeat(2, minmax(240px, auto))' gap={6}>
                <GridItem m={0}>
                  <Grid templateRows='repeat(2, auto)'>
                    <GridItem>
                      <TargetBoard
                        target={
                          game.getCurrentTarget() === '-1'
                            ? 'Fin'
                            : game.getCurrentTarget() === 'S-BULL'
                            ? 'BULL'
                            : game.getCurrentTarget()
                        }
                        message='Target'
                      />
                    </GridItem>
                    <GridItem>
                      <TargetBoard target={game.getCount().toString()} message='Count' size='sm' />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem maxW='500px' alignSelf='center'>
                  <Board scores={game.getNumberOfCount()} />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <MyRoundScore game={game} setGame={setGame} user={user} />
            </GridItem>
            <GridItem>
              <RoundBoard score={game.getScore()} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem pt={4}>
          <CountButtons
            onCount={(n) => updateObject(game, new CricketMarkUpGame(10), 'addScore', setGame, n)}
            buttons={[20, 19, 18, 17, 16, 15]}
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
            bull
            other
          />
        </GridItem>
      </Grid>
    </div>
  );
};

const MobileMain: FC<MainProps> = ({ game, setGame, user, description }) => {
  return (
    <Grid gap={4} justifyItems='center'>
      <GridItem w='100%'>
        <Flex justifyContent='space-between'>
          <NewGame
            onNewGame={(targetCount) => {
              if (game.isFinished())
                saveHistory(game.getGameResult(), db.cricketMarkUpResult, user);
              setGame(new CricketMarkUpGame(targetCount));
            }}
            currentTargetCount={game.getTargetCount()}
            isFinished={game.isFinished()}
          />
          <Flex alignItems='end' w='100%' justifyContent='space-around'>
            <TargetBoard
              target={
                game.getCurrentTarget() === '-1'
                  ? 'Fin'
                  : game.getCurrentTarget() === 'S-BULL'
                  ? 'BULL'
                  : game.getCurrentTarget()
              }
              message='Target'
            />
            <TargetBoard target={game.getCount().toString()} message='Count' size='sm' />
          </Flex>
          <Flex direction='column'>
            <DescriptionModal
              header={'Cricket Mark-Up'}
              description={<Text whiteSpace='pre-wrap'>{description}</Text>}
            />
            <CameraView />
          </Flex>
        </Flex>
      </GridItem>
      <Box maxH={250} overflow='scroll'>
        <Board scores={game.getNumberOfCount()} />
      </Box>
      <MyRoundScore game={game} setGame={setGame} user={user} />
      <Box w='100%'>
        <CountButtons
          onCount={(n) => updateObject(game, new CricketMarkUpGame(10), 'addScore', setGame, n)}
          buttons={[parseInt(game.getCurrentTarget())]}
          bull={game.getCurrentTarget() === 'S-BULL'}
          disabled={game.getRoundScore().length >= 3 || game.isFinished()}
          other
        />
        <Box p={4}>
          <RoundBoard score={game.getScore()} />
        </Box>
      </Box>
    </Grid>
  );
};

const MyRoundScore: FC<MainProps> = ({ game, setGame, user }) => (
  <RoundScore
    scores={game.getRoundScore()}
    onClear={() => updateObject(game, new CricketMarkUpGame(10), 'removeScore', setGame)}
    onRoundChange={() => updateObject(game, new CricketMarkUpGame(10), 'roundChange', setGame)}
    isFinished={game.isFinished()}
    onRoundOver={() => {
      saveHistory(game.getGameResult(), db.cricketMarkUpResult, user);
      setGame(new CricketMarkUpGame(game.getTargetCount()));
    }}
    result={getResult(game)}
  />
);

const getResult = (game: CricketMarkUpGame) =>
  `Total: ${game.getGameResult().result}\n${game
    .getGameResult()
    .scores.map((s) => `${s.number === 25 ? 'BULL' : s.number}: ${s.total}`)
    .join('\n')}\n`;

export default Main;
