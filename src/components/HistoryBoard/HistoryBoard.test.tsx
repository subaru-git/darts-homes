import { render } from '@testing-library/react'
import HistoryBoard from './HistoryBoard'

test('should rendering', () => {
  const { container } = render(<HistoryBoard />)
  expect(container).toMatchSnapshot()
})
