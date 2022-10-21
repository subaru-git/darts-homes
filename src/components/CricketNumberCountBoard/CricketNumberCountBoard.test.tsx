import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import CricketNumberCountBoard from './CricketNumberCountBoard'

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1000)
  const { container } = render(
    <ChakraProvider>
      <CricketNumberCountBoard data={[]} />
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
