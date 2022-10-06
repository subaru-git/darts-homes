import React, { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Footer from '../components/Footer'
import HomeDescription from '../components/HomeDescription'
import HomeDescriptionRespect from '../components/HomeDescriptionRespect'
import NavigationBar, { NavItem } from '../components/NavigationBar'

const HomeMain: FC = () => {
  return (
    <div data-cy='home-main'>
      <NavigationBar items={items} />
      <Grid templateRows='repeat(2, auto)' gap={2} pb={2}>
        <HomeDescription />
        <HomeDescriptionRespect />
      </Grid>
      <Footer />
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
        href: '/eagleseye',
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

export default HomeMain
