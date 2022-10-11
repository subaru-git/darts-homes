import { useCallback, useEffect, useState } from 'react'
import equal from 'fast-deep-equal'
import CricketNumberCountGame from '@/lib/CricketNumberCountGame/CricketNumberCountGame'

const useGame = (
  defaultValue: CricketNumberCountGame,
): [CricketNumberCountGame, (game: CricketNumberCountGame) => void] => {
  const [gameInternal, setGameInternal] = useState(defaultValue)

  useEffect(() => {
    const game = localStorage.getItem('game')
    if (game && !equal(JSON.parse(game), gameInternal.getProgressJson())) {
      const g = new CricketNumberCountGame(0)
      g.resumeGame(JSON.parse(game))
      setGameInternal(g)
    }
  }, [gameInternal])
  const setGame = useCallback(
    (game: CricketNumberCountGame) => {
      localStorage.setItem('game', JSON.stringify(game.getProgressJson()))
      console.log('setGame called', game)
      setGameInternal(game)
    },
    [setGameInternal],
  )
  return [gameInternal, setGame]
}

export default useGame
