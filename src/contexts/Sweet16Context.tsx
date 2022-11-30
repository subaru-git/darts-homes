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
import { createCheckers } from 'ts-interface-checker';
import Sweet16Game from '@/lib/Sweet16Game';
import types from '@/schemas/Types-ti';

const sweet16GameContext = createContext<Sweet16Game | null>(new Sweet16Game(20));
const setSweet16GameContext = createContext<Dispatch<SetStateAction<Sweet16Game | null>>>(
  () => undefined,
);

const Sweet16GameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<Sweet16Game | null>(null);
  useEffect(() => {
    const g = new Sweet16Game(20);
    const memoGame = localStorage.getItem('Sweet16');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { Sweet16Progress } = createCheckers(types);
      if (Sweet16Progress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('Sweet16', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <sweet16GameContext.Provider value={game}>
      <setSweet16GameContext.Provider value={setGame}>{children}</setSweet16GameContext.Provider>
    </sweet16GameContext.Provider>
  );
};

const useSweet16Game = () => useContext(sweet16GameContext);
const useSweet16GameSet = () => useContext(setSweet16GameContext);

export { Sweet16GameContextProvider, useSweet16Game, useSweet16GameSet };
