import Game from './AroundTheCompassGame';

test('create instance', () => {
  const game = new Game(20);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(20);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12D');
  expect(game.getTotalScore()).toBe(5);
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12');
  expect(game.getCurrentTarget()).toBe(12);
  game.addScore('6D');
  expect(game.getTotalScore()).toBe(10);
  expect(game.getCurrentTarget()).toBe(24);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12D');
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12D');
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12D');
  expect(game.getTotalScore()).toBe(25);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12');
  expect(game.getCurrentTarget()).toBe(12);
  game.addScore('12');
  expect(game.getCurrentTarget()).toBe(12);
  game.addScore('12');
  expect(game.getTotalScore()).toBe(25);
  game.roundChange();
  [...Array(16)].forEach(() => {
    expect(game.getCurrentTarget()).toBe(24);
    game.addScore('12');
    expect(game.getCurrentTarget()).toBe(12);
    game.addScore('12');
    expect(game.getCurrentTarget()).toBe(12);
    game.addScore('12');
    expect(game.getTotalScore()).toBe(25);
    game.roundChange();
  });
  expect(game.getRound()).toBe(20);
  expect(game.getCurrentTarget()).toBe(24);
  game.addScore('12');
  expect(game.getCurrentTarget()).toBe(12);
  game.addScore('12');
  expect(game.getCurrentTarget()).toBe(12);
  game.addScore('12');
  expect(game.getTotalScore()).toBe(25);
  expect(game.isFinish()).toBeTruthy();
});
