import {
  convertArrangeOutToGameScore,
  convertCountScoreToNumberOfCount,
  convertFirebaseResultToGameResult,
  convertGameResultToFirebaseResult,
  convertNumberOfCountToMarkCount,
  convertPointsToScore,
  convertScoreToCount,
  convertScoreToNumber,
  convertScoreToPoints,
} from './Converter';

test('convertScoreToNumber', () => {
  expect(convertScoreToNumber('20')).toBe(20);
  expect(convertScoreToNumber('D20')).toBe(40);
  expect(convertScoreToNumber('T20')).toBe(60);
  expect(convertScoreToNumber('2')).toBe(2);
  expect(convertScoreToNumber('D2')).toBe(4);
  expect(convertScoreToNumber('T2')).toBe(6);
  expect(convertScoreToNumber('4')).toBe(4);
  expect(convertScoreToNumber('D4')).toBe(8);
  expect(convertScoreToNumber('T4')).toBe(12);
  expect(convertScoreToNumber('D-BULL')).toBe(50);
  expect(convertScoreToNumber('S-BULL')).toBe(50);
});

test('convertScoreToCount', () => {
  expect(convertScoreToCount('20')).toBe(1);
  expect(convertScoreToCount('D20')).toBe(2);
  expect(convertScoreToCount('T20')).toBe(3);
  expect(convertScoreToCount('D-BULL')).toBe(2);
  expect(convertScoreToCount('S-BULL')).toBe(1);
});

test('convertCountScoreToNumberOfCount', () => {
  expect(convertCountScoreToNumberOfCount([['20-3', '25-2', '15-0']], 15, 20)).toEqual([
    { number: 20, count: 3, total: 1 },
    { number: 19, count: 0, total: 0 },
    { number: 18, count: 0, total: 0 },
    { number: 17, count: 0, total: 0 },
    { number: 16, count: 0, total: 0 },
    { number: 15, count: 0, total: 1 },
    { number: 25, count: 2, total: 1 },
  ]);
});

test('convertNumberOfCountToMarkCount', () => {
  expect(convertNumberOfCountToMarkCount(10)).toEqual([3, 3, 3, 1]);
  expect(convertNumberOfCountToMarkCount(5)).toEqual([3, 2]);
});

test('convertPointToTarget', () => {
  expect(convertScoreToNumber('20')).toBe(20);
  expect(convertScoreToNumber('D20')).toBe(40);
  expect(convertScoreToNumber('T20')).toBe(60);
  expect(convertScoreToNumber('D-BULL')).toBe(50);
  expect(convertScoreToNumber('S-BULL')).toBe(50);
  expect(convertScoreToNumber('OUT')).toBe(0);
  expect(convertScoreToNumber('0')).toBe(0);
});

test('convertPointsToScore', () => {
  const points: point[][] = [
    ['T20', 'T20', 'T20'],
    ['T19', 'T19', 'T19'],
    ['T18', 'T18', 'T18'],
  ];
  expect(convertPointsToScore(points)).toEqual([
    { round: 0, score: ['T20', 'T20', 'T20'] },
    { round: 1, score: ['T19', 'T19', 'T19'] },
    { round: 2, score: ['T18', 'T18', 'T18'] },
  ]);
});

test('convertGameResultToFireStore', () => {
  const r = {
    result: 0,
    scores: [
      ['T20' as point, 'T20' as point, 'T20' as point],
      ['T19' as point, 'T19' as point, 'T19' as point],
      ['T18' as point, 'T18' as point, 'T18' as point],
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };
  const e = {
    result: 0,
    scores: [
      { round: 0, score: ['T20', 'T20', 'T20'] },
      { round: 1, score: ['T19', 'T19', 'T19'] },
      { round: 2, score: ['T18', 'T18', 'T18'] },
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };

  const result: GameResultModel = {
    cricketMarkUp: [],
    eaglesEye: [r],
    doubleTrouble: [r],
    sweet16: [{ ...r, round: 0 }],
    topsAndTens: [r],
    twoDartCombinations: [r],
    aroundTheCompass: [{ ...r, round: 0 }],
    tonsUp: [{ ...r, round: 0 }],
    route64: [{ ...r, round: 0 }],
    eightyThrew: [{ ...r, round: 0 }],
    shanghaiNights: [{ ...r, round: 0 }],
    switchHitter: [{ ...r, round: 0 }],
    bullyBully: [{ ...r, round: 0 }],
    treblesForShow: [{ ...r, round: 0 }],
    countUp: [],
  };
  expect(convertGameResultToFirebaseResult(result)).toEqual({
    cricketMarkUp: [],
    eaglesEye: [e],
    doubleTrouble: [e],
    sweet16: [{ ...e, round: 0 }],
    topsAndTens: [e],
    twoDartCombinations: [e],
    aroundTheCompass: [{ ...e, round: 0 }],
    tonsUp: [{ ...e, round: 0 }],
    route64: [{ ...e, round: 0 }],
    eightyThrew: [{ ...e, round: 0 }],
    shanghaiNights: [{ ...e, round: 0 }],
    switchHitter: [{ ...e, round: 0 }],
    bullyBully: [{ ...e, round: 0 }],
    treblesForShow: [{ ...e, round: 0 }],
    countUp: [],
  });
});

test('convertScoreToPoints', () => {
  const scores: FirebaseScore[] = [
    { round: 1, score: ['T19' as point, 'T19' as point, 'T19' as point] },
    { round: 0, score: ['T20' as point, 'T20' as point, 'T20' as point] },
    { round: 2, score: ['T18' as point, 'T18' as point, 'T18' as point] },
  ];
  expect(convertScoreToPoints(scores)).toEqual([
    ['T20', 'T20', 'T20'],
    ['T19', 'T19', 'T19'],
    ['T18', 'T18', 'T18'],
  ]);
});

test('convertGameResultToFireStore', () => {
  const e = {
    result: 0,
    scores: [
      ['T20' as point, 'T20' as point, 'T20' as point],
      ['T19' as point, 'T19' as point, 'T19' as point],
      ['T18' as point, 'T18' as point, 'T18' as point],
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };
  const r = {
    result: 0,
    scores: [
      { round: 1, score: ['T19' as point, 'T19' as point, 'T19' as point] },
      { round: 0, score: ['T20' as point, 'T20' as point, 'T20' as point] },
      { round: 2, score: ['T18' as point, 'T18' as point, 'T18' as point] },
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };

  const result: GameResultModelFirebase = {
    cricketMarkUp: [],
    eaglesEye: [r],
    doubleTrouble: [r],
    sweet16: [{ ...r, round: 0 }],
    topsAndTens: [r],
    twoDartCombinations: [r],
    aroundTheCompass: [{ ...r, round: 0 }],
    tonsUp: [{ ...r, round: 0 }],
    route64: [{ ...r, round: 0 }],
    eightyThrew: [{ ...r, round: 0 }],
    shanghaiNights: [{ ...r, round: 0 }],
    switchHitter: [{ ...r, round: 0 }],
    bullyBully: [{ ...r, round: 0 }],
    treblesForShow: [{ ...r, round: 0 }],
  };
  expect(convertFirebaseResultToGameResult(result)).toEqual({
    cricketMarkUp: [],
    eaglesEye: [e],
    doubleTrouble: [e],
    sweet16: [{ ...e, round: 0 }],
    topsAndTens: [e],
    twoDartCombinations: [e],
    aroundTheCompass: [{ ...e, round: 0 }],
    tonsUp: [{ ...e, round: 0 }],
    route64: [{ ...e, round: 0 }],
    eightyThrew: [{ ...e, round: 0 }],
    shanghaiNights: [{ ...e, round: 0 }],
    switchHitter: [{ ...e, round: 0 }],
    bullyBully: [{ ...e, round: 0 }],
    treblesForShow: [{ ...e, round: 0 }],
  });
});

test('convertArrangeOutToGameScore', () => {
  expect(
    convertArrangeOutToGameScore({
      target: 501,
      score: [
        ['T20', 'T20', 'T20'],
        ['T20', 'T20', 'T20'],
        ['T20', 'T19', '12'],
        ['D12', '0', '0'],
        ['OUT', 'OUT', 'OUT'],
        ['OUT', 'D6', '0'],
      ],
    }),
  ).toEqual([
    {
      Scored: '',
      ToGo: '501',
      Hits: null,
    },
    {
      Scored: '180',
      ToGo: '321',
      Hits: ['T20', 'T20', 'T20'],
    },
    {
      Scored: '180',
      ToGo: '141',
      Hits: ['T20', 'T20', 'T20'],
    },
    {
      Scored: '129',
      ToGo: '12',
      Hits: ['T20', 'T19', '12'],
    },
    {
      Scored: 'B',
      ToGo: '12',
      Hits: ['D12', '-', '-'],
    },
    {
      Scored: '-',
      ToGo: '12',
      Hits: ['OUT', 'OUT', 'OUT'],
    },
    {
      Scored: '',
      ToGo: '②',
      Hits: ['OUT', 'D6', '-'],
    },
  ]);
});
