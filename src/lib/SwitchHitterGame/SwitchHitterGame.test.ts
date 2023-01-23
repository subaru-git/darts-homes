import Game from './SwitchHitterGame';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(4);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(19);
  game.addScore('19');
  expect(game.getTotalScore()).toBe(2);
  game.addScore('D19');
  expect(game.getTotalScore()).toBe(4);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(9);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(19);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(14);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(19);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(34);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(19);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(39);
  game.addScore('T19');
  expect(game.getTotalScore()).toBe(44);
  game.addScore('D19');
  expect(game.getTotalScore()).toBe(46);
  game.roundChange();
  expect(game.getRound()).toBe(4);
  expect(game.getCurrentTarget()).toBe(19);
  game.addScore('T20');
  expect(game.getTotalScore()).toBe(46);
  game.addScore('T20');
  expect(game.getTotalScore()).toBe(46);
  game.addScore('T20');
  expect(game.getTotalScore()).toBe(46);
  expect(game.isFinished()).toBeTruthy();
});
