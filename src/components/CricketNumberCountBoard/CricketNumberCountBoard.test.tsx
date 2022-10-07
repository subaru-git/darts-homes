import { render, screen } from '@testing-library/react'
import CricketNumberCountBoard from './CricketNumberCountBoard'

test('should rendering', () => {
  const { container } = render(<CricketNumberCountBoard data={[]} />)
  expect(screen.getAllByText('20')).toHaveLength(1)
  expect(screen.getAllByText('19')).toHaveLength(1)
  expect(screen.getAllByText('18')).toHaveLength(1)
  expect(screen.getAllByText('17')).toHaveLength(1)
  expect(screen.getAllByText('16')).toHaveLength(1)
  expect(screen.getAllByText('15')).toHaveLength(1)
  expect(screen.getAllByText('BULL')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
