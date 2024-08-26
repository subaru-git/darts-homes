import { screen } from '@testing-library/react';
import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

jest.mock('next/navigation');

test('should rendering', async () => {
  const { container } = render(<Main />);
  const descriptions = screen.getAllByRole('heading', { level: 2 });
  expect(descriptions).toHaveLength(6);
  expect(container).toMatchSnapshot();
}, 30000);
