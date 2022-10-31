import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import HomeDescription from './HomeDescription'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))
test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100)
  const { container } = render(
    <ChakraProvider>
      <HomeDescription />
    </ChakraProvider>,
  )
  expect(screen.getByAltText('darts homes')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
