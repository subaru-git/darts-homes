const saveGameHistory = (history: GameResult) => {
  const gameHistory = getGameHistory()
  gameHistory.push(history)
  localStorage.setItem('gameHistory', JSON.stringify(gameHistory))
}

const getGameHistory = () => {
  const gameHistory = localStorage.getItem('gameHistory')
  if (gameHistory) {
    return JSON.parse(gameHistory)
  }
  return []
}

const importGameHistory = (gameHistory: GameResult[]) => {
  localStorage.setItem('gameHistory', JSON.stringify(gameHistory))
}

export { saveGameHistory, getGameHistory, importGameHistory }
