import { render, screen } from '@testing-library/react'
import CricketMarkUpDescription from './CricketMarkUpDescription'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))
test('should rendering', () => {
  const { container } = render(<CricketMarkUpDescription />)
  expect(screen.getByText('What is this game?')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
