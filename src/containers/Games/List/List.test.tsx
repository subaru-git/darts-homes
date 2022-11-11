import { render } from '@testing-library/react';
import List from './List';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  const { container } = render(<List />);
  expect(container).toMatchSnapshot();
});
