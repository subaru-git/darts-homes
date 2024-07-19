import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';
import { useSearchParams } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('next/navigation');

test('should rendering', async () => {
  const useSearchParamsMock = useSearchParams as jest.Mock;
  useSearchParamsMock.mockReturnValue({ get: jest.fn() });
  render(<Main />);
}, 30000);
