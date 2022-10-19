import { render } from '@testing-library/react'
import CricketNumberCountSettingModal from './CricketNumberCountSettingModal'

test('should rendering', () => {
  const { container } = render(<CricketNumberCountSettingModal />)
  expect(container).toMatchSnapshot()
})
