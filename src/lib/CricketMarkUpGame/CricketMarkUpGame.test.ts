import Game from './CricketMarkUpGame';

test('create instance', () => {
  const game = new Game(10);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(10);
  game.addScore('T20');
  game.addScore('T20');
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'T20', 'D20']);
  expect(game.getCountScore()).toEqual([['20-3', '20-3', '20-2']]);
  expect(game.getCurrentTarget()).toEqual('20');
  game.roundChange();
  game.addScore('20');
  game.addScore('D20');
  game.addScore('12');
  expect(game.getRoundScore()).toEqual(['20', 'D20', '12']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
  ]);
  expect(game.getCurrentTarget()).toEqual('19');
  game.roundChange();
  game.addScore('19');
  game.addScore('D19');
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['19', 'D19', '20']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
  ]);
  expect(game.getCurrentTarget()).toEqual('19');
  game.roundChange();
  game.addScore('T19');
  game.addScore('T19');
  game.addScore('D19');
  expect(game.getRoundScore()).toEqual(['T19', 'T19', 'D19']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
  ]);
  expect(game.getCurrentTarget()).toEqual('18');
  game.roundChange();
  game.addScore('T18');
  game.addScore('T18');
  game.addScore('T18');
  expect(game.getRoundScore()).toEqual(['T18', 'T18', 'T18']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
  ]);
  expect(game.getCurrentTarget()).toEqual('18');
  game.roundChange();
  game.addScore('T18');
  game.addScore('T17');
  game.addScore('T17');
  expect(game.getRoundScore()).toEqual(['T18', 'T17', 'T17']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
  ]);
  expect(game.getCurrentTarget()).toEqual('17');
  game.roundChange();
  game.addScore('T17');
  game.addScore('T17');
  game.addScore('T16');
  expect(game.getRoundScore()).toEqual(['T17', 'T17', 'T16']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
    ['17-3', '17-1', '16-3'],
  ]);
  expect(game.getCurrentTarget()).toEqual('16');
  game.roundChange();
  game.addScore('T16');
  game.addScore('T16');
  game.addScore('T16');
  expect(game.getRoundScore()).toEqual(['T16', 'T16', 'T16']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
    ['17-3', '17-1', '16-3'],
    ['16-3', '16-3', '16-1'],
  ]);
  expect(game.getCurrentTarget()).toEqual('15');
  game.roundChange();
  game.addScore('T15');
  game.addScore('T15');
  game.addScore('T15');
  expect(game.getRoundScore()).toEqual(['T15', 'T15', 'T15']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
    ['17-3', '17-1', '16-3'],
    ['16-3', '16-3', '16-1'],
    ['15-3', '15-3', '15-3'],
  ]);
  expect(game.getCurrentTarget()).toEqual('15');
  game.roundChange();
  game.addScore('T15');
  game.addScore('T15');
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['T15', 'T15', 'D-BULL']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
    ['17-3', '17-1', '16-3'],
    ['16-3', '16-3', '16-1'],
    ['15-3', '15-3', '15-3'],
    ['15-1', '25-0', '25-2'],
  ]);
  expect(game.getCurrentTarget()).toEqual('S-BULL');
  game.roundChange();
  game.addScore('D-BULL');
  game.addScore('D-BULL');
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['D-BULL', 'D-BULL', 'D-BULL']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
    ['17-3', '17-1', '16-3'],
    ['16-3', '16-3', '16-1'],
    ['15-3', '15-3', '15-3'],
    ['15-1', '25-0', '25-2'],
    ['25-2', '25-2', '25-2'],
  ]);
  expect(game.getCurrentTarget()).toEqual('S-BULL');
  game.roundChange();
  expect(game.isFinished()).toEqual(false);
  game.addScore('D-BULL');
  expect(game.isFinished()).toEqual(true);
  game.addScore('D-BULL');
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['D-BULL', 'D-BULL', 'D-BULL']);
  expect(game.getCountScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
    ['17-3', '17-1', '16-3'],
    ['16-3', '16-3', '16-1'],
    ['15-3', '15-3', '15-3'],
    ['15-1', '25-0', '25-2'],
    ['25-2', '25-2', '25-2'],
    ['25-2', '-1', '-1'],
  ]);
  expect(game.getCurrentTarget()).toEqual('-1');
  game.roundChange();
  expect(game.getGameResult().result).toEqual(34);
  expect(game.getGameResult().targetCount).toEqual(10);
  expect(game.getGameResult().scores[0].number).toEqual(20);
  expect(game.getGameResult().scores[0].count).toEqual(10);
  expect(game.getGameResult().scores[0].total).toEqual(5);
});
test('should output progress and resume game', () => {
  const game = new Game(10);
  game.addScore('T20');
  game.addScore('OUT');
  game.addScore('0');
  game.roundChange();
  expect(game.getGameProgress()).toEqual({
    targetCount: 10,
    round: [],
    score: [['T20', 'OUT', '0']],
  });
  game.addScore('T19');
  game.addScore('T18');
  game.addScore('T17');
  expect(game.getGameProgress()).toEqual({
    targetCount: 10,
    round: ['T19', 'T18', 'T17'],
    score: [['T20', 'OUT', '0']],
  });
  game.roundChange();
  expect(game.getGameProgress()).toEqual({
    targetCount: 10,
    round: [],
    score: [
      ['T20', 'OUT', '0'],
      ['T19', 'T18', 'T17'],
    ],
  });
  const newGame = new Game(0);
  newGame.resumeGame({ targetCount: 10, round: [], score: [['T20', 'OUT', '0']] });
  expect(newGame.getScore()).toEqual([['T20', 'OUT', '0']]);
  expect(newGame['targetCount']).toEqual(10);
});
