import { render } from '@testing-library/react';
import AppSeo from './AppSeo';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  const { container } = render(<AppSeo page='' />);
  expect(container).toMatchSnapshot();
});
