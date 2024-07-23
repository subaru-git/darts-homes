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
import DoubleTroubleGame from '@/lib/DoubleTroubleGame';
import types from '@/schemas/Types-ti';

const doubleTroubleGameContext = createContext<DoubleTroubleGame | null>(new DoubleTroubleGame());
const setDoubleTroubleGameContext = createContext<
  Dispatch<SetStateAction<DoubleTroubleGame | null>>
>(() => undefined);

const DoubleTroubleGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<DoubleTroubleGame | null>(null);
  useEffect(() => {
    const g = new DoubleTroubleGame();
    const memoGame = localStorage.getItem('DoubleTrouble');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { DoubleTroubleProgress } = createCheckers(types);
      if (DoubleTroubleProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('DoubleTrouble', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <doubleTroubleGameContext.Provider value={game}>
      <setDoubleTroubleGameContext.Provider value={setGame}>
        {children}
      </setDoubleTroubleGameContext.Provider>
    </doubleTroubleGameContext.Provider>
  );
};

const useDoubleTroubleGame = () => useContext(doubleTroubleGameContext);
const useDoubleTroubleGameSet = () => useContext(setDoubleTroubleGameContext);

export { DoubleTroubleGameContextProvider, useDoubleTroubleGame, useDoubleTroubleGameSet };
