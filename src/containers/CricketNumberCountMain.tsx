import React, { FC } from 'react'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import CountButtons from '@/components/CountButtons'
import CricketNumberCountBoard from '@/components/CricketNumberCountBoard'
import CricketNumberCountSettings from '@/components/CricketNumberCountSettings'
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import RoundBoard from '@/components/RoundBoard'
import RoundScore from '@/components/RoundScore'
import TargetBoard from '@/components/TargetBoard'
import useGame from '@/hooks/game'
import useLocale from '@/hooks/locale'
import CricketNumberCountGame from '@/lib/CricketNumberCountGame/CricketNumberCountGame'
import { saveGameHistory } from '@/lib/GameHistoryManager/GameHistory'

const CricketNumberCountMain: FC = () => {
  const [game, setGame] = useGame(new CricketNumberCountGame(10))
  return (
    <div data-cy='cricket-number-count-main'>
      <NavigationBar items={GetNavItem()} />
      <Box display={{ base: 'none', md: 'block' }}>
        <DesktopMain game={game} setGame={setGame} />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <MobileMain game={game} setGame={setGame} />
      </Box>
      <Footer />
    </div>
  )
}

const DesktopMain: FC<{
  game: CricketNumberCountGame
  setGame: (game: CricketNumberCountGame) => void
}> = ({ game, setGame }) => {
  return (
    <div>
      <CricketNumberCountSettings
        onNewGame={(targetNumber, save) => {
          if (save) saveGameHistory(game.getGameResult())
          setGame(new CricketNumberCountGame(targetNumber))
        }}
        targetCount={game.getTargetCount()}
        isFinished={game.isFinished()}
      />
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
                  <CricketNumberCountBoard data={game.getScore()} />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <RoundScore
                scores={game.getRoundScore()}
                onClear={() => {
                  const g = Object.assign(new CricketNumberCountGame(10), game)
                  g.removeScore()
                  setGame(g)
                }}
                onRoundChange={() => {
                  const g = Object.assign(new CricketNumberCountGame(10), game)
                  g.roundChange()
                  setGame(g)
                }}
                isFinished={game.isFinished()}
                onRoundOver={() => {
                  saveGameHistory(game.getGameResult())
                  setGame(new CricketNumberCountGame(game.getTargetCount()))
                }}
              />
            </GridItem>
            <GridItem>
              <RoundBoard score={game.getRoundsScore()} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem pt={4}>
          <CountButtons
            onCount={(n) => {
              const g = Object.assign(new CricketNumberCountGame(10), game)
              g.addScore(n)
              setGame(g)
            }}
            begin={15}
            end={20}
            reversed={true}
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
            other
          />
        </GridItem>
      </Grid>
    </div>
  )
}

const MobileMain: FC<{
  game: CricketNumberCountGame
  setGame: (game: CricketNumberCountGame) => void
}> = ({ game, setGame }) => {
  return (
    <>
      <Grid gap={4} justifyItems='center'>
        <GridItem w='100%'>
          <Flex justifyContent='space-between'>
            <CricketNumberCountSettings
              onNewGame={(targetNumber, save) => {
                if (save) saveGameHistory(game.getGameResult())
                setGame(new CricketNumberCountGame(targetNumber))
              }}
              targetCount={game.getTargetCount()}
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
          </Flex>
        </GridItem>
        <Box maxH={250} overflow='scroll'>
          <CricketNumberCountBoard data={game.getScore()} />
        </Box>
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new CricketNumberCountGame(10), game)
            g.removeScore()
            setGame(g)
          }}
          onRoundChange={() => {
            const g = Object.assign(new CricketNumberCountGame(10), game)
            g.roundChange()
            setGame(g)
          }}
          isFinished={game.isFinished()}
          onRoundOver={() => {
            saveGameHistory(game.getGameResult())
            setGame(new CricketNumberCountGame(game.getTargetCount()))
          }}
        />
        <Box w='100%'>
          <CountButtons
            onCount={(n) => {
              const g = Object.assign(new CricketNumberCountGame(10), game)
              g.addScore(n)
              setGame(g)
            }}
            begin={parseInt(game.getCurrentTarget())}
            end={parseInt(game.getCurrentTarget())}
            reversed={true}
            bull={game.getCurrentTarget() === 'S-BULL'}
            disabled={game.getRoundScore().length >= 3 || game.isFinished()}
            other
          />
          <RoundBoard score={game.getRoundsScore()} />
        </Box>
      </Grid>
    </>
  )
}

const GetNavItem = () => {
  const { t } = useLocale()

  return [
    {
      label: 'Games',
      children: [
        {
          label: '501',
          subLabel: t.N01_DESCRIPTION,
          href: '/n01',
        },
        {
          label: "Eagle's Eye",
          subLabel: t.EAGLES_EYE_DESCRIPTION,
          href: '/eagleseye',
        },
        {
          label: 'Cricket Number Count',
          subLabel: t.CRICKET_NUMBER_COUNT_SHORT_DESCRIPTION,
          href: '/#',
        },
      ],
    },
    {
      label: 'Respects',
      href: '#',
    },
    {
      label: 'History',
      href: '/history',
    },
  ]
}

export default CricketNumberCountMain
