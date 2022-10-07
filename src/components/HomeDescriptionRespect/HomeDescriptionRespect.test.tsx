import { render } from '@testing-library/react'
import HomeDescriptionRespect from './HomeDescriptionRespect'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))
test('should rendering', () => {
  const { container } = render(<HomeDescriptionRespect />)
  expect(container.getElementsByClassName('YouTube')).not.toBeNull()
  expect(container).toMatchSnapshot()
})
