import React, { FC, useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import CountButtons from '@/components/CountButtons'
import CricketNumberCountBoard from '@/components/CricketNumberCountBoard'
import CricketNumberCountSettings from '@/components/CricketNumberCountSettings'
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import RoundBoard from '@/components/RoundBoard'
import RoundScore from '@/components/RoundScore'
import TargetBoard from '@/components/TargetBoard'
import useLocale from '@/hooks/locale'
import CricketNumberCountGame from '@/lib/CricketNumberCountGame/CricketNumberCountGame'

const CricketNumberCountMain: FC = () => {
  const [game, setGame] = useState(new CricketNumberCountGame(10))
  return (
    <div data-cy='cricket-number-count-main'>
      <NavigationBar items={GetNavItem()} />
      <CricketNumberCountSettings
        onNewGame={(targetNumber) => {
          setGame(new CricketNumberCountGame(targetNumber))
        }}
      />
      <Grid templateColumns='repeat(2, auto)' gap={6} p={4}>
        <GridItem>
          <Grid templateRows='repeat(3, auto)' gap={10}>
            <GridItem>
              <Grid templateColumns='repeat(2, auto)' gap={6}>
                <GridItem>
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
      <Footer />
    </div>
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
  ]
}

export default CricketNumberCountMain
