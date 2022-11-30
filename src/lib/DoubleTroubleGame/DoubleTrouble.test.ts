import Game from './DoubleTroubleGame';

test('create instance', () => {
  const game = new Game();
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game();
  [...Array(20)].forEach((_, i) => {
    expect(game.getRound()).toBe(i + 1);
    expect(game.getCurrentTarget()).toEqual(i + 1);
    game.addScore(`${i + 1}D` as point);
    game.addScore(`${i + 1}D` as point);
    game.addScore(`${i + 1}D` as point);
    expect(game.getRoundScore()).toEqual([`${i + 1}D`, `${i + 1}D`, `${i + 1}D`]);
    expect(game.getTotalScore()).toEqual(15 * (i + 1));
    game.roundChange();
  });
  expect(game.isFinished()).toBeTruthy();
  expect(game.getGameResult()).toEqual({
    result: 300,
    scores: [...Array(20)].map((_, i) => [`${i + 1}D`, `${i + 1}D`, `${i + 1}D`]),
    playedAt: expect.any(String),
  });
});
