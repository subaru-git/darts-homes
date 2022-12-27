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
  });
  expect(game.getCurrentTarget()).toBe(120);
  expect(game.getLastTargetOutCount()).toBe(8);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['20T', '20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20', '20D']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20D']);
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '20D', '10']);
  expect(game.getCurrentTarget()).toBe(-1);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T', '20T', '0']);
  expect(game.getCurrentTarget()).toBe(-1);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['20T', 'D-BULL', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(100);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20D', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(90);
  expect(game.getLastTargetOutCount()).toBe(5);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '10']);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '10', '10']);
  expect(game.getCurrentTarget()).toBe(10);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['10', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('5D');
  expect(game.getRoundScore()).toEqual(['5D', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  game.addScore('19');
  expect(game.getRoundScore()).toEqual(['20T', '19', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D']);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D', '20D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(70);
  expect(game.getLastTargetOutCount()).toBe(3);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['20D', '15D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getLastTargetOutCount()).toBe(2);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['15D']);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['15D', '15D', '0']);
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
    ['20T', '20', '20D'],
    ['20T', '20D', '10'],
    ['20T', '20T', '0'],
    ['20T', 'D-BULL', '0'],
    ['20T', '20D', '0'],
    ['20T', '10', '10'],
    ['10', '0', '0'],
    ['5D', '0', '0'],
    ['20T', '19', '0'],
    ['20D', '20D', '0'],
    ['20D', '15D', '0'],
    ['15D', '15D', '0'],
    ['D-BULL', '0', '0'],
  ]);
  expect(game.getTargets()).toEqual([120, 110, 100, 90, 80, 70, 60, 50]);
  expect(game.getGameResult()).toEqual({
    result: [
      { target: 120, score: [['20T', '20', '20D']] },
      {
        target: 110,
        score: [
          ['20T', '20D', '10'],
          ['20T', '20T', '0'],
          ['20T', 'D-BULL', '0'],
        ],
      },
      { target: 100, score: [['20T', '20D', '0']] },
      {
        target: 90,
        score: [
          ['20T', '10', '10'],
          ['10', '0', '0'],
          ['5D', '0', '0'],
        ],
      },
      {
        target: 80,
        score: [
          ['20T', '19', '0'],
          ['20D', '20D', '0'],
        ],
      },
      { target: 70, score: [['20D', '15D', '0']] },
      { target: 60, score: [['15D', '15D', '0']] },
      { target: 50, score: [['D-BULL', '0', '0']] },
    ],
    settings: {
      targets: [120, 110, 100, 90, 80, 70, 60, 50],
      range: 60,
      out: 'double',
      simulation: true,
      separate: false,
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
  });
  expect(game.getCurrentTarget()).toBe(120);
  expect(game.getLastTargetOutCount()).toBe(8);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['20T', '20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20', '20D']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20D']);
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '20D', '10']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(100);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20D', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(90);
  expect(game.getLastTargetOutCount()).toBe(5);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '10']);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '10', '10']);
  expect(game.getCurrentTarget()).toBe(10);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['10', '0', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D']);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D', '20D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(70);
  expect(game.getLastTargetOutCount()).toBe(3);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['20D', '15D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getLastTargetOutCount()).toBe(2);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['15D']);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['15D', '15D', '0']);
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
  });
  expect(game.getCurrentTarget()).toBe(120);
  expect(game.getLastTargetOutCount()).toBe(8);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(60);
  game.addScore('20');
  expect(game.getRoundScore()).toEqual(['20T', '20']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20', '20D']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(110);
  expect(game.getLastTargetOutCount()).toBe(7);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(50);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20D']);
  expect(game.getCurrentTarget()).toBe(10);
  game.addScore('5D');
  expect(game.getRoundScore()).toEqual(['20T', '20D', '5D']);
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(100);
  expect(game.getLastTargetOutCount()).toBe(6);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20T', '20D', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(90);
  expect(game.getLastTargetOutCount()).toBe(5);
  game.addScore('20T');
  expect(game.getRoundScore()).toEqual(['20T']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '10']);
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('10');
  expect(game.getRoundScore()).toEqual(['20T', '10', '10']);
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
  game.addScore('3T');
  expect(game.getRoundScore()).toEqual(['1', '3T', '0']);
  expect(game.getCurrentTarget()).toBe(0);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(80);
  expect(game.getLastTargetOutCount()).toBe(4);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D']);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D', '20D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(70);
  expect(game.getLastTargetOutCount()).toBe(3);
  game.addScore('20D');
  expect(game.getRoundScore()).toEqual(['20D']);
  expect(game.getCurrentTarget()).toBe(30);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['20D', '15D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(60);
  expect(game.getLastTargetOutCount()).toBe(2);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['15D']);
  game.addScore('15D');
  expect(game.getRoundScore()).toEqual(['15D', '15D', '0']);
  game.roundChange();
  expect(game.getCurrentTarget()).toBe(50);
  expect(game.getLastTargetOutCount()).toBe(1);
  game.addScore('D-BULL');
  expect(game.getRoundScore()).toEqual(['D-BULL', '0', '0']);
  expect(game.getLastTargetOutCount()).toBe(0);
  expect(game.isFinished()).toBeTruthy();
});
