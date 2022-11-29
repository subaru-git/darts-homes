import { updateObject } from './updateObjectState';
import Game from '@/lib/CricketMarkUpGame/CricketMarkUpGame';

test('updateObject', () => {
  const game = new Game(10);
  const setter = jest.fn();
  updateObject(game, new Game(10), 'addScore', setter, '1');
  expect(setter).toBeCalledWith({
    player: { name: 'Player1', rounds: [] },
    roundScore: ['1'],
    targetCount: 10,
  });
});
