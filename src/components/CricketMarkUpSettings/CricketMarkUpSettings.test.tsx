import { ChakraProvider } from '@chakra-ui/react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock'
import CricketMarkUpSettings from './CricketMarkUpSettings'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  window.matchMedia = createMatchMedia(1100)
  const mockOnNewGame = jest.fn()
  const { container } = render(
    <ChakraProvider>
      <CricketMarkUpSettings onNewGame={mockOnNewGame} isFinished={false} targetCount={10} />
    </ChakraProvider>,
  )
  fireEvent.click(screen.getByText('New Game'))
  fireEvent.click(screen.getAllByText('New Game')[1])
  fireEvent.click(screen.getByText('OK'))
  expect(mockOnNewGame).toBeCalledTimes(1)
  expect(container).toMatchSnapshot()
})
