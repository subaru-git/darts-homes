import { render } from '@testing-library/react'
import HistoryImportExport from './HistoryImportExport'

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }))

test('should rendering', () => {
  const onErrorMock = jest.fn()
  const { container } = render(<HistoryImportExport onError={onErrorMock} />)
  expect(container).toMatchSnapshot()
})
