import { render } from '@testing-library/react';
import AppDefaultSeo from './AppDefaultSeo';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  const { container } = render(<AppDefaultSeo />);
  expect(container).toMatchSnapshot();
});
