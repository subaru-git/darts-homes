import { render } from '@testing-library/react'
import HistoryDeleteAlert from './HistoryDeleteAlert'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  const onCloseMock = jest.fn()
  const onDeleteMock = jest.fn()
  const { container } = render(
    <HistoryDeleteAlert
      message='message'
      isOpen={false}
      onClose={onCloseMock}
      onDelete={onDeleteMock}
    />,
  )
  expect(container).toMatchSnapshot()
})
