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
import BullyBullyGame from '@/lib/BullyBullyGame';
import types from '@/schemas/Types-ti';

const bullyBullyGameContext = createContext<BullyBullyGame | null>(new BullyBullyGame(20));
const setBullyBullyGameContext = createContext<Dispatch<SetStateAction<BullyBullyGame | null>>>(
  () => undefined,
);

const BullyBullyGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<BullyBullyGame | null>(null);
  useEffect(() => {
    const g = new BullyBullyGame(20);
    const memoGame = localStorage.getItem('BullyBully');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { BullyBullyProgress } = createCheckers(types);
      if (BullyBullyProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('BullyBully', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <bullyBullyGameContext.Provider value={game}>
      <setBullyBullyGameContext.Provider value={setGame}>
        {children}
      </setBullyBullyGameContext.Provider>
    </bullyBullyGameContext.Provider>
  );
};

const useBullyBullyGame = () => useContext(bullyBullyGameContext);
const useBullyBullyGameSet = () => useContext(setBullyBullyGameContext);

export { BullyBullyGameContextProvider, useBullyBullyGame, useBullyBullyGameSet };
