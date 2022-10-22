import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import HistoryBoard from './HistoryBoard'

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100)
  const { container } = render(
    <ChakraProvider>
      <HistoryBoard />
    </ChakraProvider>,
  )
  expect(container).toMatchSnapshot()
})
