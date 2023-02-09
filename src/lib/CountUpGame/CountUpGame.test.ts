import Game from './CountUpGame';

test('create instance', () => {
  const game = new Game();
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game();
  game.addRoundScoreNumber(21);
  expect(game.getRoundScoreNumber()).toBe(21);
  expect(game.getTotalScore()).toBe(21);
  game.roundChange();
  expect(game.getRoundScoreNumber()).toBeNull();
  expect(game.getTotalScore()).toBe(21);
  game.roundChange();
  game.addRoundScoreNumber(21);
  game.roundChange();
  game.addRoundScoreNumber(21);
  game.roundChange();
  game.addRoundScoreNumber(21);
  game.roundChange();
  game.addRoundScoreNumber(21);
  expect(game.getGameProgress()).toEqual({ round: 21, score: [21, 21, 21, 21] });
  game.roundChange();
  game.addRoundScoreNumber(21);
  game.roundChange();
  game.addRoundScoreNumber(21);
  game.roundChange();
  expect(game.getTotalScore()).toBe(147);
  expect(game.isFinished()).toBeFalsy();
  game.addRoundScoreNumber(21);
  expect(game.getTotalScore()).toBe(168);
  expect(game.isFinished()).toBeTruthy();
  expect(game.getGameResult().scores).toEqual([21, 21, 21, 21, 21, 21, 21, 21]);
  expect(game.getGameResult().result).toEqual(168);
});
