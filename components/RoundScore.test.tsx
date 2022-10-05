import { fireEvent, render, screen } from '@testing-library/react'
import RoundScore from './RoundScore'

test('should rendering', () => {
  const clear = jest.fn()
  const roundChange = jest.fn()
  const { container } = render(
    <RoundScore scores={['20T', '19T', '18T']} onClear={clear} onRoundChange={roundChange} />,
  )
  expect(screen.getAllByText('20T')).toHaveLength(1)
  expect(screen.getAllByText('19T')).toHaveLength(1)
  expect(screen.getAllByText('18T')).toHaveLength(1)
  fireEvent.click(screen.getByLabelText('clear scores'))
  expect(clear).toBeCalledTimes(1)
  fireEvent.click(screen.getByText('Round Change'))
  expect(roundChange).toBeCalledTimes(1)
  expect(container).toMatchSnapshot()
})
