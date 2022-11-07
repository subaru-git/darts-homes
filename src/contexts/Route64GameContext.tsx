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
import Route64Game from '@/lib/Route64Game/Route64Game';

const route64GameContext = createContext<Route64Game | null>(new Route64Game(20));
const setRoute64GameContext = createContext<Dispatch<SetStateAction<Route64Game | null>>>(
  () => undefined,
);

const Route64GameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<Route64Game | null>(null);
  useEffect(() => {
    const g = new Route64Game(20);
    const memoGame = localStorage.getItem('Route64');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('Route64', JSON.stringify(game.getProgressJson()));
  }, [game]);
  return (
    <route64GameContext.Provider value={game}>
      <setRoute64GameContext.Provider value={setGame}>{children}</setRoute64GameContext.Provider>
    </route64GameContext.Provider>
  );
};

const useRoute64Game = () => useContext(route64GameContext);
const useRoute64GameSet = () => useContext(setRoute64GameContext);

export { Route64GameContextProvider, useRoute64Game, useRoute64GameSet };
