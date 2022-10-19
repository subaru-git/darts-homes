import { fireEvent, render, screen } from '@testing-library/react'
import CricketNumberCountSettings from './CricketNumberCountSettings'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  const mockOnNewGame = jest.fn()
  const { container } = render(
    <CricketNumberCountSettings onNewGame={mockOnNewGame} isFinished={false} />,
  )
  fireEvent.click(screen.getByText('New Game'))
  fireEvent.click(screen.getAllByText('New Game')[1])
  fireEvent.click(screen.getByText('OK'))
  expect(mockOnNewGame).toBeCalledTimes(1)
  expect(container).toMatchSnapshot()
})
