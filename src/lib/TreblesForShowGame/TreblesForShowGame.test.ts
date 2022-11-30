import Game from './TreblesForShowGame';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(3);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('20');
  expect(game.getTotalScore()).toBe(2);
  game.addScore('20D');
  expect(game.getTotalScore()).toBe(4);
  game.addScore('20T');
  expect(game.getTotalScore()).toBe(9);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('20T');
  expect(game.getTotalScore()).toBe(14);
  game.addScore('20T');
  expect(game.getTotalScore()).toBe(19);
  game.addScore('20T');
  expect(game.getTotalScore()).toBe(39);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('19T');
  expect(game.getTotalScore()).toBe(39);
  game.addScore('18T');
  expect(game.getTotalScore()).toBe(39);
  game.addScore('17T');
  expect(game.getTotalScore()).toBe(39);
  expect(game.isFinished()).toBeTruthy();
});
