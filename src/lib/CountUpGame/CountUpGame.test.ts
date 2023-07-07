import Game from './CountUpGame';

test('create instance', () => {
  const game = new Game();
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game();
  game.addScoreNumber(21);
  expect(game.getScoreNumber()).toEqual([21]);
  expect(game.getTotalScore()).toBe(21);
  game.addScoreNumber(21);
  game.addScoreNumber(21);
  game.addScoreNumber(21);
  game.addScoreNumber(21);
  expect(game.getGameProgress()).toEqual({ score: [21, 21, 21, 21, 21] });
  game.addScoreNumber(21);
  game.addScoreNumber(21);
  expect(game.getTotalScore()).toBe(147);
  expect(game.isFinished()).toBeFalsy();
  game.addScoreNumber(21);
  expect(game.getTotalScore()).toBe(168);
  expect(game.isFinished()).toBeTruthy();
  expect(game.getGameResult().scores).toEqual([21, 21, 21, 21, 21, 21, 21, 21]);
  expect(game.getGameResult().result).toEqual(168);
});
