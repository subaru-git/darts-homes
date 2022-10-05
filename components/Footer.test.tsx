import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('should rendering', () => {
  const { container } = render(<Footer />)
  expect(screen.getAllByText('(c)2022-2022 subaru-git')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
