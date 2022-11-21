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
import ArrangeGame from '@/lib/ArrangeGame/ArrangeGame';
import types from '@/schemas/Types-ti';

const arrangeGameContext = createContext<ArrangeGame | null>(new ArrangeGame());
const setArrangeGameContext = createContext<Dispatch<SetStateAction<ArrangeGame | null>>>(
  () => undefined,
);

const ArrangeGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<ArrangeGame | null>(null);
  useEffect(() => {
    const g = new ArrangeGame();
    const memoGame = localStorage.getItem('Arrange');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { ArrangeGameProgress } = createCheckers(types);
      if (ArrangeGameProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('Arrange', JSON.stringify(game.getProgressJson()));
  }, [game]);
  return (
    <arrangeGameContext.Provider value={game}>
      <setArrangeGameContext.Provider value={setGame}>{children}</setArrangeGameContext.Provider>
    </arrangeGameContext.Provider>
  );
};

const useArrangeGame = () => useContext(arrangeGameContext);
const useArrangeGameSet = () => useContext(setArrangeGameContext);

export { ArrangeGameContextProvider, useArrangeGame, useArrangeGameSet };
