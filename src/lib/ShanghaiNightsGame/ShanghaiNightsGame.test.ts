import Game from './ShanghaiNightsGame';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(4);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(120);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(100);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toBe(10);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(120);
  game.addScore('D-BULL');
  expect(game.getCurrentTarget()).toBe(70);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getTotalScore()).toBe(10);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(120);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(80);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toBe(30);
  game.roundChange();
  expect(game.getRound()).toBe(4);
  expect(game.getCurrentTarget()).toBe(120);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getTotalScore()).toBe(30);
  expect(game.isFinished()).toBeTruthy();
});
