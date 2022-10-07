import { render, screen } from '@testing-library/react'
import RoundBoard from './RoundBoard'

test('should rendering', () => {
  const { container } = render(<RoundBoard score={[['20T', '19T', '18T']]} />)
  expect(screen.getAllByText('20T')).toHaveLength(1)
  expect(screen.getAllByText('19T')).toHaveLength(1)
  expect(screen.getAllByText('18T')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
