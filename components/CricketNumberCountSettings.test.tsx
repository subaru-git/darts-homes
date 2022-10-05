import { fireEvent, render, screen } from '@testing-library/react'
import CricketNumberCountSettings from './CricketNumberCountSettings'

test('should rendering', () => {
  const mockOnNewGame = jest.fn()
  const { container } = render(<CricketNumberCountSettings onNewGame={mockOnNewGame} />)
  fireEvent.click(screen.getByText('Settings'))
  fireEvent.click(screen.getByText('New Game'))
  expect(mockOnNewGame).toBeCalledTimes(1)
  expect(container).toMatchSnapshot()
})
