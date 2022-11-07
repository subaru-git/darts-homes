import Game from './EightyThrewGame';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(4);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(82);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(62);
  game.addScore('10T');
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toBe(10);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(82);
  game.addScore('D-BULL');
  expect(game.getCurrentTarget()).toBe(32);
  game.addScore('16D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toBe(30);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(82);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(22);
  game.addScore('11');
  expect(game.getCurrentTarget()).toBe(11);
  game.addScore('11');
  expect(game.getCurrentTarget()).toBe(11);
  expect(game.getTotalScore()).toBe(30);
  game.roundChange();
  expect(game.getRound()).toBe(4);
  expect(game.getCurrentTarget()).toBe(82);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(22);
  game.addScore('14');
  expect(game.getCurrentTarget()).toBe(8);
  game.addScore('16');
  expect(game.getCurrentTarget()).toBe(8);
  expect(game.getTotalScore()).toBe(30);
  expect(game.isFinish()).toBeTruthy();
});
