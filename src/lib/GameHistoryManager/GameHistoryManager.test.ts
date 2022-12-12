import { deleteHistory, mergeGameHistory, mergeHistory, saveToDB } from './GameHistoryManager';
import { db } from '@/db/db';

beforeEach(() => {
  localStorage.clear();
});

test('manage game history', async () => {
  const history = {
    targetCount: 10,
    result: 10,
    scores: [
      { number: 20, count: 10, total: 10 },
      { number: 19, count: 10, total: 11 },
      { number: 18, count: 10, total: 4 },
      { number: 17, count: 10, total: 9 },
      { number: 16, count: 10, total: 7 },
      { number: 15, count: 10, total: 8 },
      { number: 25, count: 10, total: 11 },
    ],
    playedAt: '2020-01-01T00:00:00.000Z',
    uuid: '1',
  };
  await saveToDB(history, db.cricketMarkUpResult);
});

test('delete history', () => {
  const result = { result: 0, scores: [], playedAt: '', uuid: '1' };
  const history: GameResultModel = {
    eaglesEye: [
      { ...result, uuid: '1' },
      { ...result, uuid: '2' },
    ],
    twoDartCombinations: [{ ...result, uuid: '4' }],
  };
  expect(deleteHistory('1', history)).toEqual({
    eaglesEye: [{ ...result, uuid: '2' }],
    twoDartCombinations: [{ ...result, uuid: '4' }],
  });
});

test('merge game history', () => {
  const result = { result: 0, scores: [], playedAt: '', uuid: '1' };
  const h1: GameResultModel = {
    eaglesEye: [{ ...result, uuid: '1' }],
  };
  const h2: GameResultModel = {
    eaglesEye: [{ ...result, uuid: '2' }],
  };
  const h = mergeGameHistory(h1, h2);
  expect(h).toEqual({
    eaglesEye: [
      { ...result, uuid: '1' },
      { ...result, uuid: '2' },
    ],
  });
});

test('merge history', () => {
  const result = { result: 0, scores: [], playedAt: '', uuid: '1' };
  const h1: ResultModel[] = [
    { ...result, uuid: '1' },
    { ...result, uuid: '2' },
  ];
  const h2: ResultModel[] = [
    { ...result, uuid: '2' },
    { ...result, uuid: '3' },
  ];
  const h = mergeHistory(h1, h2);
  expect(h).toEqual([
    { ...result, uuid: '1' },
    { ...result, uuid: '2' },
    { ...result, uuid: '3' },
  ]);
});
