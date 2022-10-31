import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import NavigationBar from './NavigationBar'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100)
  const { container } = render(
    <ChakraProvider>
      <NavigationBar />
    </ChakraProvider>,
  )
  expect(screen.getByAltText('darts homes logo')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
