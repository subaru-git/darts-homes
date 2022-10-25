import { render } from '@testing-library/react'
import RespectCard from './RespectCard'

test('should rendering', () => {
  const { container } = render(
    <RespectCard
      data={{
        title: 'title',
        image: 'image',
        description: 'description',
        url: 'url',
        type: 'type',
      }}
    />,
  )
  expect(container).toMatchSnapshot()
})
