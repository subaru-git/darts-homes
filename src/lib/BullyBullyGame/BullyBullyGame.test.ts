import Game from './BullyBullyGame';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(3);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('S-BULL');
  expect(game.getTotalScore()).toBe(2);
  game.addScore('D-BULL');
  expect(game.getTotalScore()).toBe(7);
  game.addScore('D-BULL');
  expect(game.getTotalScore()).toBe(22);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('T20');
  expect(game.getTotalScore()).toBe(22);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(22);
  game.addScore('T18');
  expect(game.getTotalScore()).toBe(22);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('S-BULL');
  expect(game.getTotalScore()).toBe(24);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(24);
  game.addScore('T18');
  expect(game.getTotalScore()).toBe(24);
  expect(game.isFinished()).toBeTruthy();
});
