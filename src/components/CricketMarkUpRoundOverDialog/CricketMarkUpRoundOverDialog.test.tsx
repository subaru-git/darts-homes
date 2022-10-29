import { render } from '@testing-library/react'
import CricketMarkUpRoundOverDialog from './CricketMarkUpRoundOverDialog'

test('should rendering', () => {
  const onCloseMock = jest.fn()
  const onNewGameMock = jest.fn()
  const { container } = render(
    <CricketMarkUpRoundOverDialog isOpen={false} onClose={onCloseMock} onNewGame={onNewGameMock} />,
  )
  expect(container).toMatchSnapshot()
})
