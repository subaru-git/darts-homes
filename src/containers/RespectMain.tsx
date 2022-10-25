import React, { FC } from 'react'
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import RespectCardView from '@/components/RespectCardView'
import useLocale from '@/hooks/locale'

type RespectMainProps = {
  data: RespectResult
}

const RespectMain: FC<RespectMainProps> = ({ data }) => {
  return (
    <div data-cy='respect-main'>
      <NavigationBar items={GetNavItem()} />
      <RespectCardView data={data} />
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
      label: 'Respect',
      href: '#',
    },
    {
      label: 'History',
      href: '/history',
    },
  ]
}

export default RespectMain
