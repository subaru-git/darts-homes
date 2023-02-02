import { screen } from '@testing-library/react';
import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const { container } = render(<Main />);
  const h1 = screen.getAllByRole('heading', { level: 1 });
  expect(h1).toHaveLength(1);
  const h2 = screen.getAllByRole('heading', { level: 2 });
  expect(h2).toHaveLength(6);
  expect(container).toMatchSnapshot();
}, 30000);
