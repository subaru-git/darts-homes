import Game from './CricketMarkUpGame';

test('create instance', () => {
  const game = new Game(10);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(10);
  game.addScore('20T');
  game.addScore('20T');
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20T', '20D']);
  expect(game.getScore()).toEqual([['20-3', '20-3', '20-2']]);
  expect(game.getCurrentTarget()).toEqual('20');
  game.roundChange();
  game.addScore('20');
  game.addScore('20D');
  game.addScore('12');
  expect(game.getRoundScore()).toEqual(['20', '20D', '12']);
  expect(game.getScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
  ]);
  expect(game.getCurrentTarget()).toEqual('19');
  game.roundChange();
  game.addScore('19');
  game.addScore('19D');
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['19', '19D', '20']);
  expect(game.getScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
  ]);
  expect(game.getCurrentTarget()).toEqual('19');
  game.roundChange();
  game.addScore('19T');
  game.addScore('19T');
  game.addScore('19D');
  expect(game.getRoundScore()).toEqual(['19T', '19T', '19D']);
  expect(game.getScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
  ]);
  expect(game.getCurrentTarget()).toEqual('18');
  game.roundChange();
  game.addScore('18T');
  game.addScore('18T');
  game.addScore('18T');
  expect(game.getRoundScore()).toEqual(['18T', '18T', '18T']);
  expect(game.getScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
  ]);
  expect(game.getCurrentTarget()).toEqual('18');
  game.roundChange();
  game.addScore('18T');
  game.addScore('17T');
  game.addScore('17T');
  expect(game.getRoundScore()).toEqual(['18T', '17T', '17T']);
  expect(game.getScore()).toEqual([
    ['20-3', '20-3', '20-2'],
    ['20-1', '20-1', '19-0'],
    ['19-1', '19-2', '19-0'],
    ['19-3', '19-3', '19-1'],
    ['18-3', '18-3', '18-3'],
    ['18-1', '17-3', '17-3'],
  ]);
  expect(game.getCurrentTarget()).toEqual('17');
  game.roundChange();
  game.addScore('17T');
  game.addScore('17T');
  game.addScore('16T');
  expect(game.getRoundScore()).toEqual(['17T', '17T', '16T']);
  expect(game.getScore()).toEqual([
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
  game.addScore('16T');
  game.addScore('16T');
  game.addScore('16T');
  expect(game.getRoundScore()).toEqual(['16T', '16T', '16T']);
  expect(game.getScore()).toEqual([
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
  game.addScore('15T');
  game.addScore('15T');
  game.addScore('15T');
  expect(game.getRoundScore()).toEqual(['15T', '15T', '15T']);
  expect(game.getScore()).toEqual([
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
  game.addScore('15T');
  game.addScore('15T');
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['15T', '15T', 'D-BULL']);
  expect(game.getScore()).toEqual([
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
  expect(game.getScore()).toEqual([
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
  expect(game.getScore()).toEqual([
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
  game.addScore('20T');
  game.addScore('OUT');
  game.addScore('0');
  game.roundChange();
  expect(game.getProgressJson()).toEqual({
    targetCount: 10,
    round: [],
    score: [['20T', 'OUT', '0']],
  });
  game.addScore('19T');
  game.addScore('18T');
  game.addScore('17T');
  expect(game.getProgressJson()).toEqual({
    targetCount: 10,
    round: ['19T', '18T', '17T'],
    score: [['20T', 'OUT', '0']],
  });
  game.roundChange();
  expect(game.getProgressJson()).toEqual({
    targetCount: 10,
    round: [],
    score: [
      ['20T', 'OUT', '0'],
      ['19T', '18T', '17T'],
    ],
  });
  const newGame = new Game(0);
  newGame.resumeGame({ targetCount: 10, round: [], score: [['20T', 'OUT', '0']] });
  expect(newGame.getRoundsScore()).toEqual([['20T', 'OUT', '0']]);
  expect(newGame['targetCount']).toEqual(10);
});
