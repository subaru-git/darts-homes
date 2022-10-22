import React, { FC } from 'react'
import Footer from '@/components/Footer'
import HistoryBoard from '@/components/HistoryBoard'
import NavigationBar from '@/components/NavigationBar'
import useLocale from '@/hooks/locale'

const HistoryMain: FC = () => {
  return (
    <div data-cy='history-main'>
      <NavigationBar items={GetNavItem()} />
      <HistoryBoard />
      <Footer />
    </div>
  )
}

export default HistoryMain

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
      href: '#',
    },
  ]
}
