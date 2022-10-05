import Game from './EaglesEyeGame'

test('create instance', () => {
  const game = new Game()
  expect(game).toBeTruthy()
})

test('in gaming', () => {
  const game = new Game()
  game.addScore('12')
  game.addScore('S-BULL')
  game.addScore('D-BULL')
  expect(game.getRoundScore()).toEqual(['12', 'S-BULL', 'D-BULL'])
  game.roundChange()
  expect(game.getScore()).toEqual([['12', 'S-BULL', 'D-BULL']])
  game.addScore('1')
  game.addScore('D-BULL')
  game.addScore('S-BULL')
  expect(game.getRoundScore()).toEqual(['1', 'D-BULL', 'S-BULL'])
  game.roundChange()
  expect(game.getScore()).toEqual([
    ['12', 'S-BULL', 'D-BULL'],
    ['1', 'D-BULL', 'S-BULL'],
  ])
})
