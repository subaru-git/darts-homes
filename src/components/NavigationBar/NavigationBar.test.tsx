import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import NavigationBar, { NavItem } from './NavigationBar'

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100)
  const { container } = render(
    <ChakraProvider>
      <NavigationBar items={items} />
    </ChakraProvider>,
  )
  expect(screen.getByAltText('logo')).not.toBeNull()
  expect(container).toMatchSnapshot()
})

const items: Array<NavItem> = [
  {
    label: 'Games',
    children: [
      {
        label: '501',
        subLabel: 'The popular dart game',
        href: '#',
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
