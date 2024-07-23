'use client';
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
import TreblesForShowGame from '@/lib/TreblesForShowGame';
import types from '@/schemas/Types-ti';

const treblesForShowGameContext = createContext<TreblesForShowGame | null>(
  new TreblesForShowGame(20),
);
const setTreblesForShowGameContext = createContext<
  Dispatch<SetStateAction<TreblesForShowGame | null>>
>(() => undefined);

const TreblesForShowGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<TreblesForShowGame | null>(null);
  useEffect(() => {
    const g = new TreblesForShowGame(20);
    const memoGame = localStorage.getItem('TreblesForShow');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { TreblesForShowProgress } = createCheckers(types);
      if (TreblesForShowProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('TreblesForShow', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <treblesForShowGameContext.Provider value={game}>
      <setTreblesForShowGameContext.Provider value={setGame}>
        {children}
      </setTreblesForShowGameContext.Provider>
    </treblesForShowGameContext.Provider>
  );
};

const useTreblesForShowGame = () => useContext(treblesForShowGameContext);
const useTreblesForShowGameSet = () => useContext(setTreblesForShowGameContext);

export { TreblesForShowGameContextProvider, useTreblesForShowGame, useTreblesForShowGameSet };
