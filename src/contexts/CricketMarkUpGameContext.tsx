import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import CricketMarkUpGame from '@/lib/CricketMarkUpGame/CricketMarkUpGame'

const cricketMarkUpGameContext = createContext<CricketMarkUpGame | null>(new CricketMarkUpGame(10))
const setCricketMarkUpGameContext = createContext<
  Dispatch<SetStateAction<CricketMarkUpGame | null>>
>(() => undefined)

const CricketMarkUpGameContextProvider: FC<{ children: ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<CricketMarkUpGame | null>(null)
  useEffect(() => {
    const memoGame = localStorage.getItem('game')
    if (memoGame) {
      const g = new CricketMarkUpGame(0)
      g.resumeGame(JSON.parse(memoGame))
      setGame(g)
    }
  }, [])
  useEffect(() => {
    if (!game) return
    localStorage.setItem('game', JSON.stringify(game.getProgressJson()))
  }, [game])
  return (
    <cricketMarkUpGameContext.Provider value={game}>
      <setCricketMarkUpGameContext.Provider value={setGame}>
        {children}
      </setCricketMarkUpGameContext.Provider>
    </cricketMarkUpGameContext.Provider>
  )
}

const useCricketMarkUpGame = () => useContext(cricketMarkUpGameContext)
const useCricketMarkUpGameSet = () => useContext(setCricketMarkUpGameContext)

export { CricketMarkUpGameContextProvider, useCricketMarkUpGame, useCricketMarkUpGameSet }
