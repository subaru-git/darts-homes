import { render, screen } from '@testing-library/react'
import CricketNumberCountDescription from './CricketNumberCountDescription'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))
test('should rendering', () => {
  const { container } = render(<CricketNumberCountDescription />)
  expect(screen.getByText('What is this game?')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
