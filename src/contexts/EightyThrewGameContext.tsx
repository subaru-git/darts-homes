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
import EightyThrewGame from '@/lib/EightyThrewGame';
import types from '@/schemas/Types-ti';

const eightyThrewGameContext = createContext<EightyThrewGame | null>(new EightyThrewGame(20));
const setEightyThrewGameContext = createContext<Dispatch<SetStateAction<EightyThrewGame | null>>>(
  () => undefined,
);

const EightyThrewGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<EightyThrewGame | null>(null);
  useEffect(() => {
    const g = new EightyThrewGame(20);
    const memoGame = localStorage.getItem('EightyThrew');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { EightyThrewProgress } = createCheckers(types);
      if (EightyThrewProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('EightyThrew', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <eightyThrewGameContext.Provider value={game}>
      <setEightyThrewGameContext.Provider value={setGame}>
        {children}
      </setEightyThrewGameContext.Provider>
    </eightyThrewGameContext.Provider>
  );
};

const useEightyThrewGame = () => useContext(eightyThrewGameContext);
const useEightyThrewGameSet = () => useContext(setEightyThrewGameContext);

export { EightyThrewGameContextProvider, useEightyThrewGame, useEightyThrewGameSet };
