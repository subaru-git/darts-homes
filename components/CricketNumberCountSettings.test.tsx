import { fireEvent, render, screen } from '@testing-library/react'
import CricketNumberCountSettings from './CricketNumberCountSettings'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  const mockOnNewGame = jest.fn()
  const { container } = render(<CricketNumberCountSettings onNewGame={mockOnNewGame} />)
  fireEvent.click(screen.getByText('Settings'))
  fireEvent.click(screen.getByText('New Game'))
  expect(mockOnNewGame).toBeCalledTimes(1)
  expect(container).toMatchSnapshot()
})
