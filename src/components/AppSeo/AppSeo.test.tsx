import { render } from '@testing-library/react';
import AppSeo from './AppSeo';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

test('should rendering', () => {
  const { container } = render(<AppSeo page='cricketmarkup' />, { container: document.head });
  expect(document.title).toBe('Cricket Mark-Up');
  expect(container).toMatchSnapshot();
});
