import React, { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Footer from '@/components/Footer'
import HomeDescription from '@/components/HomeDescription'
import HomeDescriptionRespect from '@/components/HomeDescriptionRespect'
import NavigationBar from '@/components/NavigationBar'
import useLocale from '@/hooks/locale'

const HomeMain: FC = () => {
  return (
    <div data-cy='home-main'>
      <NavigationBar items={GetNavItem()} />
      <Grid templateRows='repeat(2, auto)' gap={2} pb={2} px={{ base: 2, md: 4 }}>
        <HomeDescription />
        <HomeDescriptionRespect />
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
          href: '/cricketnumbercount',
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

export default HomeMain
