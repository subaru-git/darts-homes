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
import ShanghaiNightsGame from '@/lib/ShanghaiNightsGame';
import types from '@/schemas/Types-ti';

const shanghaiNightsGameContext = createContext<ShanghaiNightsGame | null>(
  new ShanghaiNightsGame(20),
);
const setShanghaiNightsGameContext = createContext<
  Dispatch<SetStateAction<ShanghaiNightsGame | null>>
>(() => undefined);

const ShanghaiNightsGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<ShanghaiNightsGame | null>(null);
  useEffect(() => {
    const g = new ShanghaiNightsGame(20);
    const memoGame = localStorage.getItem('ShanghaiNights');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { ShanghaiNightsProgress } = createCheckers(types);
      if (ShanghaiNightsProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('ShanghaiNights', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <shanghaiNightsGameContext.Provider value={game}>
      <setShanghaiNightsGameContext.Provider value={setGame}>
        {children}
      </setShanghaiNightsGameContext.Provider>
    </shanghaiNightsGameContext.Provider>
  );
};

const useShanghaiNightsGame = () => useContext(shanghaiNightsGameContext);
const useShanghaiNightsGameSet = () => useContext(setShanghaiNightsGameContext);

export { ShanghaiNightsGameContextProvider, useShanghaiNightsGame, useShanghaiNightsGameSet };
