import { render } from '@testing-library/react'
import HistoryDeleteAlert from './HistoryDeleteAlert'

test('should rendering', () => {
  const onCloseMock = jest.fn()
  const { container } = render(
    <HistoryDeleteAlert
      history={{
        id: 1,
        game: 'game',
        setting: { targetCount: 1 },
        result: { count: 1 },
        scores: [],
        playedAt: '',
      }}
      isOpen={false}
      onClose={onCloseMock}
    />,
  )
  expect(container).toMatchSnapshot()
})
