import { ArrangeScore, DateFormat } from './Format';

test('DateFormat', () => {
  expect(DateFormat('2022-11-15T10:17:45.701Z')).toBe('2022/11/15 19:17:45');
});

test('arrange score', () => {
  expect(
    ArrangeScore([
      ['S-BULL', '19T', '9T'],
      ['20T', '0', '0'],
      ['5', '5T', '0'],
      ['5T', '0', '0'],
    ]),
  ).toEqual([
    ['S-BULL', '19T', '9T'],
    ['20T', 'BUST'],
    ['5', '5T', 'BUST'],
    ['5T', 'FINISH'],
  ]);
  expect(ArrangeScore([['S-BULL', '19T', '0']])).toEqual([['S-BULL', '19T', 'FINISH']]);
  expect(ArrangeScore([['S-BULL', '19T', '19D']])).toEqual([['S-BULL', '19T', '19D', 'FINISH']]);
  expect(ArrangeScore([['D-BULL', 'D-BULL', '17T']])).toEqual([
    ['D-BULL', 'D-BULL', '17T', 'FINISH'],
  ]);
});
