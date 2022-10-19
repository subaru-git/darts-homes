import { saveGameHistory, getGameHistory } from './GameHistory'

beforeEach(() => {
  localStorage.clear()
})

test('manage game history', () => {
  const history = {
    game: 'cricket-number-count',
    setting: { targetCount: 10 },
    result: { count: 10 },
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
  }
  saveGameHistory(history)
  expect(getGameHistory()).toEqual([history])
  const history2 = { ...history, playedAt: '2020-01-02T00:00:00.000Z' }
  saveGameHistory(history2)
  expect(getGameHistory()).toEqual([history, history2])
})
