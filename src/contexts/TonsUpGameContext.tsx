import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import TonsUpGame from '@/lib/TonsUpGame/TonsUpGame';

const tonsUpGameContext = createContext<TonsUpGame | null>(new TonsUpGame(20));
const setTonsUpGameContext = createContext<Dispatch<SetStateAction<TonsUpGame | null>>>(
  () => undefined,
);

const TonsUpGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<TonsUpGame | null>(null);
  useEffect(() => {
    const g = new TonsUpGame(20);
    const memoGame = localStorage.getItem('TonsUp');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('TonsUp', JSON.stringify(game.getProgressJson()));
  }, [game]);
  return (
    <tonsUpGameContext.Provider value={game}>
      <setTonsUpGameContext.Provider value={setGame}>{children}</setTonsUpGameContext.Provider>
    </tonsUpGameContext.Provider>
  );
};

const useTonsUpGame = () => useContext(tonsUpGameContext);
const useTonsUpGameSet = () => useContext(setTonsUpGameContext);

export { TonsUpGameContextProvider, useTonsUpGame, useTonsUpGameSet };
