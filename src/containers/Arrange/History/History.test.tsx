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
      { target: 167, score: [['T20', 'T19', 'D-BULL']] },
      { target: 28, score: [['D14', '0', '0']] },
      { target: 161, score: [['T20', 'T17', 'D-BULL']] },
      { target: 86, score: [['D-BULL', 'D18', '0']] },
      { target: 153, score: [['T17', 'T17', 'T17']] },
      { target: 166, score: [['D-BULL', 'D-BULL', 'T20'], ['D3', '0', '0']]},
      { target: 82, score: [['D-BULL', 'D16', '0']] },
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
      { target: 152, score: [['T20', 'T20', 'D16']] },
      { target: 25, score: [['9', 'D8', '0']] },
      { target: 142, score: [['S-BULL', 'S-BULL', 'T14']] },
      { target: 87, score: [['T19', 'D15', '0']] },
      { target: 154, score: [['S-BULL', 'S-BULL', 'T18']] },
      { target: 123, score: [['D-BULL', 'T19', 'D8']]},
      { target: 67, score: [['17', 'S-BULL', '0']] },
      { target: 14, score: [['D7', '0', '0']] },
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
      { target: 150, score: [['T20', 'T20', 'D15']] },
      { target: 26, score: [['10', 'D8', '0']] },
      { target: 140, score: [['S-BULL', 'S-BULL', 'D20']] },
      { target: 82, score: [['S-BULL', 'D16', '0']] },
      { target: 10, score: [['D5', '0', '0']] },
      { target: 120, score: [['D-BULL', 'S-BULL', 'D10']]},
      { target: 68, score: [['D14', 'D20', '0']] },
      { target: 16, score: [['D8', '0', '0']] },
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
