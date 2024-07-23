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
import SwitchHitterGame from '@/lib/SwitchHitterGame';
import types from '@/schemas/Types-ti';

const switchHitterGameContext = createContext<SwitchHitterGame | null>(new SwitchHitterGame(20));
const setSwitchHitterGameContext = createContext<Dispatch<SetStateAction<SwitchHitterGame | null>>>(
  () => undefined,
);

const SwitchHitterGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<SwitchHitterGame | null>(null);
  useEffect(() => {
    const g = new SwitchHitterGame(20);
    const memoGame = localStorage.getItem('SwitchHitter');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { SwitchHitterProgress } = createCheckers(types);
      if (SwitchHitterProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('SwitchHitter', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <switchHitterGameContext.Provider value={game}>
      <setSwitchHitterGameContext.Provider value={setGame}>
        {children}
      </setSwitchHitterGameContext.Provider>
    </switchHitterGameContext.Provider>
  );
};

const useSwitchHitterGame = () => useContext(switchHitterGameContext);
const useSwitchHitterGameSet = () => useContext(setSwitchHitterGameContext);

export { SwitchHitterGameContextProvider, useSwitchHitterGame, useSwitchHitterGameSet };
