import Game from './TwoDartCombinationsGame';

test('create instance', () => {
  const game = new Game();
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game();
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(41);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(21);
  game.addScore('10');
  expect(game.getCurrentTarget()).toBe(11);
  game.addScore('20');
  expect(game.getTotalScore()).toEqual(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(42);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(22);
  game.addScore('11D');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getRoundScore()).toEqual(['20', '11D', '0']);
  expect(game.getTotalScore()).toEqual(15);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(43);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(43);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(3);
  game.addScore('3');
  expect(game.getCurrentTarget()).toBe(3);
  expect(game.getTotalScore()).toEqual(15);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(44);
  game.addScore('20T');
  expect(game.getCurrentTarget()).toBe(44);
  game.addScore('20D');
  expect(game.getCurrentTarget()).toBe(4);
  game.addScore('4D');
  expect(game.getCurrentTarget()).toBe(4);
  expect(game.getTotalScore()).toEqual(15);
  game.roundChange();
});
