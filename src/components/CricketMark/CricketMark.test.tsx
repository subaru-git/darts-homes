import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import CricketMark from './CricketMark'

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1000)
  const { container } = render(
    <ChakraProvider>
      <CricketMark count={3} />
    </ChakraProvider>,
  )
  expect(container.querySelectorAll('div')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
