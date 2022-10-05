import { render, screen } from '@testing-library/react'
import HomeDescription from './HomeDescription'

test('should rendering', () => {
  const { container } = render(<HomeDescription />)
  expect(screen.getByAltText('darts')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
