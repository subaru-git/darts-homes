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
import EaglesEyeGame from '@/lib/EaglesEyeGame/EaglesEyeGame'

const eaglesEyeGameContext = createContext<EaglesEyeGame | null>(new EaglesEyeGame())
const setEaglesEyeGameContext = createContext<Dispatch<SetStateAction<EaglesEyeGame | null>>>(
  () => undefined,
)

const EaglesEyeUpGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<EaglesEyeGame | null>(null)
  useEffect(() => {
    const g = new EaglesEyeGame()
    const memoGame = localStorage.getItem('EaglesEye')
    if (memoGame) g.resumeGame(JSON.parse(memoGame))
    setGame(g)
  }, [])
  useEffect(() => {
    if (!game) return
    localStorage.setItem('EaglesEye', JSON.stringify(game.getProgressJson()))
  }, [game])
  return (
    <eaglesEyeGameContext.Provider value={game}>
      <setEaglesEyeGameContext.Provider value={setGame}>
        {children}
      </setEaglesEyeGameContext.Provider>
    </eaglesEyeGameContext.Provider>
  )
}

const useEaglesEyeGame = () => useContext(eaglesEyeGameContext)
const useEaglesEyeGameSet = () => useContext(setEaglesEyeGameContext)

export { EaglesEyeUpGameContextProvider, useEaglesEyeGame, useEaglesEyeGameSet }
