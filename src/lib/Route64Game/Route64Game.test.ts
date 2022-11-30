import Game from './Route64Game';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(3);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(64);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(44);
  game.addScore('4');
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toBe(10);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(64);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(4);
  game.addScore('2D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toBe(30);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(64);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(4);
  game.addScore('4D');
  expect(game.getCurrentTarget()).toBe(4);
  game.addScore('4');
  expect(game.getCurrentTarget()).toBe(4);
  expect(game.getTotalScore()).toBe(30);
  expect(game.isFinished()).toBeTruthy();
});
