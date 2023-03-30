import { ArrangeScore, DateFormat, toArrangeScoreBoard } from './Format';

test('DateFormat', () => {
  expect(DateFormat('2022-11-15T10:17:45.701Z')).toBe('2022/11/15 19:17:45');
});

test('arrange score', () => {
  expect(
    ArrangeScore([
      ['S-BULL', 'T19', 'T9'],
      ['T20', '0', '0'],
      ['5', 'T5', '0'],
      ['T5', '0', '0'],
    ]),
  ).toEqual([
    ['S-BULL', 'T19', 'T9'],
    ['T20', 'BUST'],
    ['5', 'T5', 'BUST'],
    ['T5', 'FINISH'],
  ]);
  expect(ArrangeScore([['S-BULL', 'T19', '0']])).toEqual([['S-BULL', 'T19', 'FINISH']]);
  expect(ArrangeScore([['S-BULL', 'T19', 'D19']])).toEqual([['S-BULL', 'T19', 'D19', 'FINISH']]);
  expect(ArrangeScore([['D-BULL', 'D-BULL', 'T17']])).toEqual([
    ['D-BULL', 'D-BULL', 'T17', 'FINISH'],
  ]);
});

test('to arrange score board', () => {
  expect(toArrangeScoreBoard([], false)).toEqual([]);
  expect(toArrangeScoreBoard([{ target: 121, score: [['S-BULL', 'T19', 'T9']] }], false)).toEqual(
    [],
  );
  expect(
    toArrangeScoreBoard(
      [
        {
          target: 121,
          score: [
            ['S-BULL', 'T19', 'T9'],
            ['5', 'D8', '0'],
          ],
        },
      ],
      false,
    ),
  ).toEqual([['121', 'S-BULL', 'T19', 'T9', '']]);
  expect(
    toArrangeScoreBoard(
      [
        {
          target: 121,
          score: [
            ['S-BULL', 'T19', 'T9'],
            ['5', 'D8', '0'],
          ],
        },
        {
          target: 122,
          score: [['S-BULL', 'T19', 'T9']],
        },
      ],
      false,
    ),
  ).toEqual([
    ['121', 'S-BULL', 'T19', 'T9', ''],
    ['', '5', 'D8', '', 'FINISH'],
  ]);
  expect(
    toArrangeScoreBoard(
      [
        {
          target: 121,
          score: [
            ['S-BULL', 'T19', 'T9'],
            ['5', 'D8', '0'],
          ],
        },
        {
          target: 122,
          score: [
            ['S-BULL', 'T19', 'T9'],
            ['6', 'D16', '0'],
          ],
        },
      ],
      false,
    ),
  ).toEqual([
    ['121', 'S-BULL', 'T19', 'T9', ''],
    ['', '5', 'D8', '', 'FINISH'],
    ['122', 'S-BULL', 'T19', 'T9', ''],
  ]);
  expect(
    toArrangeScoreBoard(
      [
        {
          target: 121,
          score: [
            ['S-BULL', 'T19', 'T9'],
            ['5', 'D8', '0'],
          ],
        },
        {
          target: 122,
          score: [
            ['S-BULL', 'T19', 'T9'],
            ['6', 'D16', '0'],
            ['6', 'D8', '0'],
          ],
        },
      ],
      true,
    ),
  ).toEqual([
    ['121', 'S-BULL', 'T19', 'T9', ''],
    ['', '5', 'D8', '', 'FINISH'],
    ['122', 'S-BULL', 'T19', 'T9', ''],
    ['', '6', 'D16', '', 'BUST'],
    ['', '6', 'D8', '', 'FINISH'],
  ]);
});
