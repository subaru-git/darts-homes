import { render } from '@testing-library/react'
import HomeDescriptionRespect from './HomeDescriptionRespect'

test('should rendering', () => {
  const { container } = render(<HomeDescriptionRespect />)
  expect(container.getElementsByClassName('YouTube')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
