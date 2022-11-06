---
to: src/lib/<%= name %>Game/<%= name %>Game.test.ts
---
import Game from './<%= name %>Game';

test('create instance', () => {
  const game = new Game();
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game();
  expect(game.isFinish()).toBeTruthy();
});
