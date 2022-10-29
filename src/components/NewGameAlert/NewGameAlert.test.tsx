import { fireEvent, render, screen } from '@testing-library/react'
import NewGameAlert from './NewGameAlert'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  const onCloseMock = jest.fn()
  const onNewGameMock = jest.fn()
  const { container } = render(
    <NewGameAlert isOpen={true} onClose={onCloseMock} onNewGame={onNewGameMock} />,
  )
  fireEvent.click(screen.getByText('OK'))
  expect(onNewGameMock).toBeCalledTimes(1)
  expect(onCloseMock).toBeCalledTimes(1)
  expect(container).toMatchSnapshot()
})
