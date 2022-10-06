import React, { FC, useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import CountBullButtons from '../components/CountBullButtons'
import EaglesEyeBoard from '../components/EaglesEyeBoard'
import NavigationBar, { NavItem } from '../components/NavigationBar'
import RoundBullScore from '../components/RoundBullScore'
import EaglesEyeGame from '../lib/EaglesEyeGame/EaglesEyeGame'

const EaglesEyeMain: FC = () => {
  const [game, setGame] = useState(new EaglesEyeGame())
  return (
    <div data-cy='eagles-eye-main'>
      <NavigationBar items={items} />
      <Grid templateRows={'repeat(3, auto)'} gap={10} justifyContent='center' p={10}>
        <GridItem>
          <CountBullButtons
            onCount={(n) => {
              const g = Object.assign(new EaglesEyeGame(), game)
              g.addScore(n)
              setGame(g)
            }}
            disabled={game.getRoundScore().length >= 3}
          />
        </GridItem>
        <GridItem maxW={1280}>
          <RoundBullScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new EaglesEyeGame(), game)
              g.removeScore()
              setGame(g)
            }}
            onRoundChange={() => {
              const g = Object.assign(new EaglesEyeGame(), game)
              g.roundChange()
              setGame(g)
            }}
          />
        </GridItem>
        <GridItem w='100%'>
          <EaglesEyeBoard data={game.getScore()} />
        </GridItem>
      </Grid>
    </div>
  )
}

const items: Array<NavItem> = [
  {
    label: 'Games',
    children: [
      {
        label: '501',
        subLabel: 'The popular dart game',
        href: '/n01',
      },
      {
        label: "Eagle's Eye",
        subLabel: 'A dart game for BULL practice',
        href: '#',
      },
      {
        label: 'Cricket Number Count',
        subLabel: 'A original dart game for practice. designed by kikuyama.',
        href: '/cricketnumbercount',
      },
    ],
  },
  {
    label: 'Respects',
    href: '#',
  },
]

export default EaglesEyeMain
