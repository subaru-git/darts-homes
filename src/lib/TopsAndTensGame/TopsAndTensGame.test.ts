import Game from './TopsAndTensGame';

test('create instance', () => {
  const game = new Game(1);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(3);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('20');
  expect(game.getTotalScore()).toEqual(0);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('D20');
  expect(game.getTotalScore()).toEqual(5);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('D5');
  expect(game.getTotalScore()).toEqual(10);
  expect(game.isFinished()).toBeTruthy();
});
