import Game from './ArrangeGame';

test('create instance', () => {
  const game = new Game();
  expect(game).toBeInstanceOf(Game);
});

test('double out', () => {
  const game = new Game({
    targets: [120, 110, 100, 90, 80, 70, 60, 50],
    range: 60,
    out: 'double',
    simulation: true,
    separate: false,
    hard: false,
    game: false,
  });
  expect(game.getCurrentTarget()).toBe(120);
  expect(game.getLastTargetOutCount()).toBe(8);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['T20', '20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', '20', 'D20']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'D20']);
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', 'D20', '10']);
  expect(game.getCurrentTarget()).toBe(-1);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20', 'T20', '0']);
  expect(game.getCurrentTarget()).toBe(-1);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['T20', 'D-BULL', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(100);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'D20', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(90);
  expect(game.getLastTargetOutCount()).toBe(5);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', '10']);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', '10', '10']);
  expect(game.getCurrentTarget()).toBe(10);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['10', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('D5');
  expect(game.getRoundScore()).toEqual(['D5', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  game.addScore('19');
  expect(game.getRoundScore()).toEqual(['T20', '19', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20']);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20', 'D20', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(70);
  expect(game.getLastTargetOutCount()).toBe(3);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D20', 'D15', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getLastTargetOutCount()).toBe(2);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D15']);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D15', 'D15', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(50);
  expect(game.getLastTargetOutCount()).toBe(1);
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['D-BULL', '0', '0']);
  expect(game.getLastTargetOutCount()).toBe(0);
  expect(game.isFinished()).toBeTruthy();
  // game result test
  const mockDate = new Date(2021, 0, 1, 1, 1, 1);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  expect(game.getScore()).toEqual([
    ['T20', '20', 'D20'],
    ['T20', 'D20', '10'],
    ['T20', 'T20', '0'],
    ['T20', 'D-BULL', '0'],
    ['T20', 'D20', '0'],
    ['T20', '10', '10'],
    ['10', '0', '0'],
    ['D5', '0', '0'],
    ['T20', '19', '0'],
    ['D20', 'D20', '0'],
    ['D20', 'D15', '0'],
    ['D15', 'D15', '0'],
    ['D-BULL', '0', '0'],
  ]);
  expect(game.getTargets()).toEqual([120, 110, 100, 90, 80, 70, 60, 50]);
  expect(game.getGameResult()).toEqual({
    result: [
      { target: 120, score: [['T20', '20', 'D20']] },
      {
        target: 110,
        score: [
          ['T20', 'D20', '10'],
          ['T20', 'T20', '0'],
          ['T20', 'D-BULL', '0'],
        ],
      },
      { target: 100, score: [['T20', 'D20', '0']] },
      {
        target: 90,
        score: [
          ['T20', '10', '10'],
          ['10', '0', '0'],
          ['D5', '0', '0'],
        ],
      },
      {
        target: 80,
        score: [
          ['T20', '19', '0'],
          ['D20', 'D20', '0'],
        ],
      },
      { target: 70, score: [['D20', 'D15', '0']] },
      { target: 60, score: [['D15', 'D15', '0']] },
      { target: 50, score: [['D-BULL', '0', '0']] },
    ],
    settings: {
      targets: [120, 110, 100, 90, 80, 70, 60, 50],
      range: 60,
      out: 'double',
      simulation: true,
      separate: false,
      hard: false,
      game: false,
    },
    playedAt: '2020-12-31T16:01:01.000Z',
  });
});

test('single out', () => {
  const game = new Game({
    targets: [120, 110, 100, 90, 80, 70, 60, 50],
    range: 60,
    out: 'single',
    simulation: true,
    separate: false,
    hard: false,
    game: false,
  });
  expect(game.getCurrentTarget()).toBe(120);
  expect(game.getLastTargetOutCount()).toBe(8);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['T20', '20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', '20', 'D20']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'D20']);
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', 'D20', '10']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(100);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'D20', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(90);
  expect(game.getLastTargetOutCount()).toBe(5);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', '10']);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', '10', '10']);
  expect(game.getCurrentTarget()).toBe(10);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['10', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20']);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20', 'D20', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(70);
  expect(game.getLastTargetOutCount()).toBe(3);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D20', 'D15', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getLastTargetOutCount()).toBe(2);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D15']);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D15', 'D15', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(50);
  expect(game.getLastTargetOutCount()).toBe(1);
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['D-BULL', '0', '0']);
  expect(game.getLastTargetOutCount()).toBe(0);
  expect(game.isFinished()).toBeTruthy();
});

test('master out', () => {
  const game = new Game({
    targets: [120, 110, 100, 90, 80, 70, 60, 50],
    range: 60,
    out: 'master',
    simulation: true,
    separate: false,
    hard: false,
    game: false,
  });
  expect(game.getCurrentTarget()).toBe(120);
  expect(game.getLastTargetOutCount()).toBe(8);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['T20', '20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', '20', 'D20']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'D20']);
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('D5');
  expect(game.getRoundScore()).toEqual(['T20', 'D20', 'D5']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(100);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['T20', 'D20', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(90);
  expect(game.getLastTargetOutCount()).toBe(5);
  game.addScore('T20');
  expect(game.getRoundScore()).toEqual(['T20']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', '10']);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['T20', '10', '10']);
  expect(game.getCurrentTarget()).toBe(10);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['10', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('1');
  expect(game.getRoundScore()).toEqual(['1']);
  expect(game.getCurrentTarget()).toBe(9);
  game.addScore('T3');
  expect(game.getRoundScore()).toEqual(['1', 'T3', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20']);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20', 'D20', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(70);
  expect(game.getLastTargetOutCount()).toBe(3);
  game.addScore('D20');
  expect(game.getRoundScore()).toEqual(['D20']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D20', 'D15', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getLastTargetOutCount()).toBe(2);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D15']);
  game.addScore('D15');
  expect(game.getRoundScore()).toEqual(['D15', 'D15', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(50);
  expect(game.getLastTargetOutCount()).toBe(1);
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['D-BULL', '0', '0']);
  expect(game.getLastTargetOutCount()).toBe(0);
  expect(game.isFinished()).toBeTruthy();
});

test('hard game mode', () => {
  const game = new Game({
    targets: [501],
    range: 60,
    out: 'double',
    simulation: true,
    separate: true,
    hard: true,
    game: true,
  });
  expect(game.getCurrentTarget()).toBe(501);
  game.addScore('T20');
  expect(game.getCurrentTarget()).toBe(441);
  game.addScore('T20');
  game.addScore('T20');
  game.roundChange();
  game.addScore('T20');
  game.addScore('T20');
  game.addScore('T20');
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(141);
  game.addScore('T20');
  game.addScore('T19');
  game.addScore('D12');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getDartsCount()).toBe(9);
  expect(game.isFinished()).toBeTruthy();
  expect(game.getArrangeScore()).toEqual([
    {
      target: 501,
      score: [
        ['T20', 'T20', 'T20'],
        ['T20', 'T20', 'T20'],
        ['T20', 'T19', 'D12'],
      ],
    },
  ]);
});

test('get darts count', () => {
  const game = new Game({
    targets: [120, 110, 100, 90, 80, 70, 60, 50],
    range: 60,
    out: 'single',
    simulation: true,
    separate: false,
    hard: false,
    game: false,
  });
  expect(game.getDartsCount()).toBe(0);
  game.addScore('20');
  expect(game.getDartsCount()).toBe(1);
  game.addScore('20');
  game.addScore('20');
  expect(game.getDartsCount()).toBe(3);
  game.roundChange();
  expect(game.getDartsCount()).toBe(3);
  game.addScore('20');
  expect(game.getDartsCount()).toBe(4);
  game.addScore('20');
  game.addScore('20');
  game.roundChange();
  expect(game.getDartsCount()).toBe(6);
  expect(game.getCurrentTarget()).toBe(110);
});
