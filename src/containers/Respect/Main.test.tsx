import { readFileSync } from 'fs';
import { screen } from '@testing-library/react';
import Main from './Main';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', async () => {
  const data = JSON.parse(readFileSync('data/data.json', 'utf8')) as RespectResult;
  const { container } = render(<Main data={data} />);
  const titles = screen.getAllByRole('heading', { level: 3 });
  const l = data.companies.length + data.professionals.length + data.youtube.length;
  expect(titles).toHaveLength(l);
  expect(container).toMatchSnapshot();
}, 30000);
