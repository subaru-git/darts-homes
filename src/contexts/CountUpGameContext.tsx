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
import CountUpGame from '@/lib/CountUpGame/CountUpGame';

const countUpGameContext = createContext<CountUpGame | null>(new CountUpGame());
const setCountUpGameContext = createContext<Dispatch<SetStateAction<CountUpGame | null>>>(
  () => undefined,
);

const CountUpGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<CountUpGame | null>(null);
  useEffect(() => {
    const g = new CountUpGame();
    const memoGame = localStorage.getItem('CountUp');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('CountUp', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <countUpGameContext.Provider value={game}>
      <setCountUpGameContext.Provider value={setGame}>{children}</setCountUpGameContext.Provider>
    </countUpGameContext.Provider>
  );
};

const useCountUpGame = () => useContext(countUpGameContext);
const useCountUpGameSet = () => useContext(setCountUpGameContext);

export { CountUpGameContextProvider, useCountUpGame, useCountUpGameSet };
