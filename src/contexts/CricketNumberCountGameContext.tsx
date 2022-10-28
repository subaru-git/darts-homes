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
import CricketNumberCountGame from '@/lib/CricketNumberCountGame/CricketNumberCountGame'

const cricketNumberCountGameContext = createContext<CricketNumberCountGame | null>(
  new CricketNumberCountGame(10),
)
const setCricketNumberCountGameContext = createContext<
  Dispatch<SetStateAction<CricketNumberCountGame | null>>
>(() => undefined)

const CricketNumberCountGameContextProvider: FC<{ children: ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<CricketNumberCountGame | null>(null)
  useEffect(() => {
    const memoGame = localStorage.getItem('game')
    if (memoGame) {
      const g = new CricketNumberCountGame(0)
      g.resumeGame(JSON.parse(memoGame))
      setGame(g)
    }
  }, [])
  useEffect(() => {
    if (!game) return
    localStorage.setItem('game', JSON.stringify(game.getProgressJson()))
  }, [game])
  return (
    <cricketNumberCountGameContext.Provider value={game}>
      <setCricketNumberCountGameContext.Provider value={setGame}>
        {children}
      </setCricketNumberCountGameContext.Provider>
    </cricketNumberCountGameContext.Provider>
  )
}

const useCricketNumberCountGame = () => useContext(cricketNumberCountGameContext)
const useCricketNumberCountGameSet = () => useContext(setCricketNumberCountGameContext)

export {
  CricketNumberCountGameContextProvider,
  useCricketNumberCountGame,
  useCricketNumberCountGameSet,
}
