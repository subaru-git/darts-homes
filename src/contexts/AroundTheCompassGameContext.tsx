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
import AroundTheCompassGame from '@/lib/AroundTheCompassGame';
import types from '@/schemas/Types-ti';

const aroundTheCompassGameContext = createContext<AroundTheCompassGame | null>(
  new AroundTheCompassGame(20),
);
const setAroundTheCompassGameContext = createContext<
  Dispatch<SetStateAction<AroundTheCompassGame | null>>
>(() => undefined);

const AroundTheCompassGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<AroundTheCompassGame | null>(null);
  useEffect(() => {
    const g = new AroundTheCompassGame(20);
    const memoGame = localStorage.getItem('AroundTheCompass');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { AroundTheCompassProgress } = createCheckers(types);
      if (AroundTheCompassProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('AroundTheCompass', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <aroundTheCompassGameContext.Provider value={game}>
      <setAroundTheCompassGameContext.Provider value={setGame}>
        {children}
      </setAroundTheCompassGameContext.Provider>
    </aroundTheCompassGameContext.Provider>
  );
};

const useAroundTheCompassGame = () => useContext(aroundTheCompassGameContext);
const useAroundTheCompassGameSet = () => useContext(setAroundTheCompassGameContext);

export { AroundTheCompassGameContextProvider, useAroundTheCompassGame, useAroundTheCompassGameSet };
