import Game from "./CricketNumberCountGame";

test("create instance", () => {
  const game = new Game(10);
  expect(game).toBeTruthy();
});

test("in gaming", () => {
  const game = new Game(10);
  game.addScore("20T");
  game.addScore("20T");
  game.addScore("20D");
  expect(game.getRoundScore()).toEqual(["20T", "20T", "20D"]);
  expect(game.getScore()).toEqual([["20-3", "20-3", "20-2"]]);
  expect(game.getCurrentTarget()).toEqual(20);
  game.roundChange();
  game.addScore("20");
  game.addScore("20D");
  game.addScore("12");
  expect(game.getRoundScore()).toEqual(["20", "20D", "12"]);
  expect(game.getScore()).toEqual([
    ["20-3", "20-3", "20-2"],
    ["20-1", "20-1", "0"],
  ]);
  expect(game.getCurrentTarget()).toEqual(19);
  game.roundChange();
  game.addScore("19");
  game.addScore("19D");
  game.addScore("20");
  expect(game.getRoundScore()).toEqual(["19", "19D", "20"]);
  expect(game.getScore()).toEqual([
    ["20-3", "20-3", "20-2"],
    ["20-1", "20-1", "0"],
    ["19-1", "19-2", "0"],
  ]);
  expect(game.getCurrentTarget()).toEqual(19);
});
