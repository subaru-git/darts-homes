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
import TopsAndTensGame from '@/lib/TopsAndTensGame/TopsAndTensGame';

const topsAndTensGameContext = createContext<TopsAndTensGame | null>(new TopsAndTensGame(20));
const setTopsAndTensGameContext = createContext<Dispatch<SetStateAction<TopsAndTensGame | null>>>(
  () => undefined,
);

const TopsAndTensGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<TopsAndTensGame | null>(null);
  useEffect(() => {
    const g = new TopsAndTensGame(20);
    const memoGame = localStorage.getItem('TopsAndTens');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('TopsAndTens', JSON.stringify(game.getProgressJson()));
  }, [game]);
  return (
    <topsAndTensGameContext.Provider value={game}>
      <setTopsAndTensGameContext.Provider value={setGame}>
        {children}
      </setTopsAndTensGameContext.Provider>
    </topsAndTensGameContext.Provider>
  );
};

const useTopsAndTensGame = () => useContext(topsAndTensGameContext);
const useTopsAndTensGameSet = () => useContext(setTopsAndTensGameContext);

export { TopsAndTensGameContextProvider, useTopsAndTensGame, useTopsAndTensGameSet };
