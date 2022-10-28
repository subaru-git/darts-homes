import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import CricketMarkUpBoard from './CricketMarkUpBoard'

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1000)
  const { container } = render(
    <ChakraProvider>
      <CricketMarkUpBoard data={[]} />
    </ChakraProvider>,
  )
  expect(screen.getAllByText('20')).toHaveLength(1)
  expect(screen.getAllByText('19')).toHaveLength(1)
  expect(screen.getAllByText('18')).toHaveLength(1)
  expect(screen.getAllByText('17')).toHaveLength(1)
  expect(screen.getAllByText('16')).toHaveLength(1)
  expect(screen.getAllByText('15')).toHaveLength(1)
  expect(screen.getAllByText('BULL')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
