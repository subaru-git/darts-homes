import { screen, act } from '@testing-library/react';
import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const { container } = render(<Main />);
  await act(async () => await new Promise((r) => setTimeout(r, 500)));
  const tabs = screen.getByRole('tablist').children;
  expect(tabs).toHaveLength(15);
  expect(container).toMatchSnapshot();
}, 30000);
