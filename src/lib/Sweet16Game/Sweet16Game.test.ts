import Game from './Sweet16Game';

test('create instance', () => {
  const game = new Game(1);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(3);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16');
  expect(game.getCurrentTarget()).toBe(16);
  game.addScore('8D');
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16D');
  expect(game.getTotalScore()).toEqual(10);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16');
  expect(game.getCurrentTarget()).toBe(16);
  game.addScore('16');
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('8');
  expect(game.getTotalScore()).toEqual(10);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16D');
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16');
  expect(game.getCurrentTarget()).toBe(16);
  game.addScore('8D');
  expect(game.getTotalScore()).toEqual(20);
  expect(game.isFinished()).toBeTruthy();
});
