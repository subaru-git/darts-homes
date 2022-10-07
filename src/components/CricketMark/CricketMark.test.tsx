import { render } from '@testing-library/react'
import CricketMark from './CricketMark'

test('should rendering', () => {
  const { container } = render(<CricketMark count={3} />)
  expect(container.querySelectorAll('div')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
