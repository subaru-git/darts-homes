import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { v4 as uuidv4 } from 'uuid';
import History from './History';
import { render } from '@/lib/TestUtils/RenderMock';

test('single out fat bull', async () => {
  const mockDate = new Date(2021, 0, 1, 1, 1, 1);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  const { container } = render(<History history={history} user={null} />);
  const user = userEvent.setup();
  const out = screen.getByRole('radio', { name: 'Single Out' });
  await user.click(out);
  const select = screen.getByRole('combobox');
  const options = screen.getAllByRole('option');
  expect(select).toBeTruthy();
  expect(options.length).toBe(8);
  expect(container).toMatchSnapshot();
});

test('master out fat bull', async () => {
  const mockDate = new Date(2021, 0, 1, 1, 1, 1);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  const { container } = render(<History history={history} user={null} />);
  const user = userEvent.setup();
  const out = screen.getByRole('radio', { name: 'Master Out' });
  jest.useRealTimers();
  await user.click(out);
  const select = screen.getByRole('combobox');
  const options = screen.getAllByRole('option');
  expect(select).toBeTruthy();
  expect(options.length).toBe(8);
  expect(container).toMatchSnapshot();
});

const history: ArrangeResultModel[] = [
  {
    // prettier-ignore
    result: [
      { target: 167, score: [['20T', '19T', 'D-BULL']] },
      { target: 28, score: [['14D', '0', '0']] },
      { target: 161, score: [['20T', '17T', 'D-BULL']] },
      { target: 86, score: [['D-BULL', '18D', '0']] },
      { target: 153, score: [['17T', '17T', '17T']] },
      { target: 166, score: [['D-BULL', 'D-BULL', '20T'], ['3D', '0', '0']]},
      { target: 82, score: [['D-BULL', '16D', '0']] },
      { target: 63, score: [['D-BULL', '13', '0']] },
    ],
    uuid: uuidv4(),
    settings: {
      range: 0,
      out: 'single',
      simulation: true,
      separate: false,
    },
    playedAt: new Date().toJSON(),
  },
  {
    // prettier-ignore
    result: [
      { target: 152, score: [['20T', '20T', '16D']] },
      { target: 25, score: [['9', '8D', '0']] },
      { target: 142, score: [['S-BULL', 'S-BULL', '14T']] },
      { target: 87, score: [['19T', '15D', '0']] },
      { target: 154, score: [['S-BULL', 'S-BULL', '18T']] },
      { target: 123, score: [['D-BULL', '19T', '8D']]},
      { target: 67, score: [['17', 'S-BULL', '0']] },
      { target: 14, score: [['7D', '0', '0']] },
    ],
    uuid: uuidv4(),
    settings: {
      range: 0,
      out: 'master',
      simulation: true,
      separate: false,
    },
    playedAt: new Date().toJSON(),
  },
  {
    // prettier-ignore
    result: [
      { target: 150, score: [['20T', '20T', '15D']] },
      { target: 26, score: [['10', '8D', '0']] },
      { target: 140, score: [['S-BULL', 'S-BULL', '20D']] },
      { target: 82, score: [['S-BULL', '16D', '0']] },
      { target: 10, score: [['5D', '0', '0']] },
      { target: 120, score: [['D-BULL', 'S-BULL', '10D']]},
      { target: 68, score: [['14D', '20D', '0']] },
      { target: 16, score: [['8D', '0', '0']] },
    ],
    uuid: uuidv4(),
    settings: {
      range: 0,
      out: 'double',
      simulation: true,
      separate: false,
    },
    playedAt: new Date().toJSON(),
  },
];
