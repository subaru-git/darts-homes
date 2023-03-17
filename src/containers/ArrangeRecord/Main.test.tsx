import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      query: 'a',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

test('should rendering', async () => {
  render(<Main />);
}, 30000);
