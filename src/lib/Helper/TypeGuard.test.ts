import { isGameHistory } from './TypeGuard';

test('isGameHistory', () => {
  const history: GameResult = {
    cricketmarkup: [
      {
        targetCount: 10,
        result: 10,
        scores: [
          { number: 20, count: 10, total: 4 },
          { number: 19, count: 10, total: 5 },
          { number: 18, count: 10, total: 4 },
          { number: 17, count: 10, total: 4 },
          { number: 16, count: 10, total: 5 },
          { number: 15, count: 10, total: 4 },
          { number: 25, count: 10, total: 8 },
        ],
        playedAt: '2020-01-01T00:00:00.000Z',
      },
    ],
    eagleseye: [
      {
        result: 225,
        scores: [
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['S-BULL', 'S-BULL', 'S-BULL'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
        ],
        playedAt: '2022-10-28T17:28:27.908Z',
      },
    ],
    doubletrouble: [
      {
        result: 225,
        scores: [
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['S-BULL', 'S-BULL', 'S-BULL'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
        ],
        playedAt: '2022-10-28T17:28:27.908Z',
      },
    ],
    sweet16: [
      {
        result: 90,
        scores: [
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
          ['16D', '16', '8D'],
        ],
        playedAt: '2022-10-28T17:28:27.908Z',
      },
    ],
  };

  expect(isGameHistory(history)).toBeTruthy();
});

test('isGameHistory empty data', () => {
  expect(isGameHistory({ cricketmarkup: [], eagleseye: [], doubletrouble: [] })).toBeTruthy();
});

test('isGameHistory some game is undefined', () => {
  expect(isGameHistory({ cricketmarkup: [] })).toBeTruthy();
  expect(isGameHistory({ doubletrouble: [] })).toBeTruthy();
  expect(isGameHistory({ doubletrouble: [] })).toBeTruthy();
});

test('isGameHistory invalid data', () => {
  expect(isGameHistory(1)).toBeFalsy();
});
