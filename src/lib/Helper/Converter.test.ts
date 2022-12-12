import {
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
  expect(convertScoreToNumber('20D')).toBe(40);
  expect(convertScoreToNumber('20T')).toBe(60);
  expect(convertScoreToNumber('2')).toBe(2);
  expect(convertScoreToNumber('2D')).toBe(4);
  expect(convertScoreToNumber('2T')).toBe(6);
  expect(convertScoreToNumber('4')).toBe(4);
  expect(convertScoreToNumber('4D')).toBe(8);
  expect(convertScoreToNumber('4T')).toBe(12);
  expect(convertScoreToNumber('D-BULL')).toBe(50);
  expect(convertScoreToNumber('S-BULL')).toBe(50);
});

test('convertScoreToCount', () => {
  expect(convertScoreToCount('20')).toBe(1);
  expect(convertScoreToCount('20D')).toBe(2);
  expect(convertScoreToCount('20T')).toBe(3);
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

test('convertPointsToScore', () => {
  const points: point[][] = [
    ['20T', '20T', '20T'],
    ['19T', '19T', '19T'],
    ['18T', '18T', '18T'],
  ];
  expect(convertPointsToScore(points)).toEqual([
    { round: 0, score: ['20T', '20T', '20T'] },
    { round: 1, score: ['19T', '19T', '19T'] },
    { round: 2, score: ['18T', '18T', '18T'] },
  ]);
});

test('convertGameResultToFireStore', () => {
  const r = {
    result: 0,
    scores: [
      ['20T' as point, '20T' as point, '20T' as point],
      ['19T' as point, '19T' as point, '19T' as point],
      ['18T' as point, '18T' as point, '18T' as point],
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };
  const e = {
    result: 0,
    scores: [
      { round: 0, score: ['20T', '20T', '20T'] },
      { round: 1, score: ['19T', '19T', '19T'] },
      { round: 2, score: ['18T', '18T', '18T'] },
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
  });
});

test('convertScoreToPoints', () => {
  const scores: FirebaseScore[] = [
    { round: 1, score: ['19T' as point, '19T' as point, '19T' as point] },
    { round: 0, score: ['20T' as point, '20T' as point, '20T' as point] },
    { round: 2, score: ['18T' as point, '18T' as point, '18T' as point] },
  ];
  expect(convertScoreToPoints(scores)).toEqual([
    ['20T', '20T', '20T'],
    ['19T', '19T', '19T'],
    ['18T', '18T', '18T'],
  ]);
});

test('convertGameResultToFireStore', () => {
  const e = {
    result: 0,
    scores: [
      ['20T' as point, '20T' as point, '20T' as point],
      ['19T' as point, '19T' as point, '19T' as point],
      ['18T' as point, '18T' as point, '18T' as point],
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };
  const r = {
    result: 0,
    scores: [
      { round: 1, score: ['19T' as point, '19T' as point, '19T' as point] },
      { round: 0, score: ['20T' as point, '20T' as point, '20T' as point] },
      { round: 2, score: ['18T' as point, '18T' as point, '18T' as point] },
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
