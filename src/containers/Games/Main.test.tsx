import { screen } from '@testing-library/react';
import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const { container } = render(<Main />);
  const titles = screen.getAllByRole('heading', { level: 3 });
  expect(titles).toHaveLength(16);
  expect(container).toMatchSnapshot();
}, 30000);
