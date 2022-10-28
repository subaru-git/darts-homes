import { isGameHistory } from './TypeGuard'

test('isGameHistory', () => {
  const history: GameResult[] = [
    {
      game: 'Cricket Mark-Up',
      setting: { targetCount: 10 },
      result: { count: 10 },
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
  ]
  expect(isGameHistory(history)).toBeTruthy()
})
