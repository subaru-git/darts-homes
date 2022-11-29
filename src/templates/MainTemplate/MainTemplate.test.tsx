import { render } from '@testing-library/react';
import MainTemplate from './MainTemplate';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  const { container } = render(<MainTemplate label='' />);
  expect(container).toMatchSnapshot();
});
