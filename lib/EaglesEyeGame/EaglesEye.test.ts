import Game from "./EaglesEyeGame";

test("create instance", () => {
  const game = new Game();
  expect(game).toBeTruthy();
});

test("in gaming", () => {
  const game = new Game();
  game.addScore("12");
  game.addScore("25");
  game.addScore("50");
  expect(game.getRoundScore()).toEqual(["12", "25", "50"]);
  game.roundChange();
  expect(game.getScore()).toEqual([[12, 25, 50]]);
  game.addScore("1");
  game.addScore("50");
  game.addScore("25");
  expect(game.getRoundScore()).toEqual(["1", "50", "25"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [12, 25, 50],
    [1, 50, 25],
  ]);
});
