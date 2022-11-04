import { render } from '@testing-library/react';
import ImportExport from './ImportExport';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  const onErrorMock = jest.fn();
  const { container } = render(<ImportExport onError={onErrorMock} />);
  expect(container).toMatchSnapshot();
});
