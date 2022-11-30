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
import TwoDartCombinationsGame from '@/lib/TwoDartCombinationsGame';
import types from '@/schemas/Types-ti';

const twoDartCombinationsGameContext = createContext<TwoDartCombinationsGame | null>(
  new TwoDartCombinationsGame(),
);
const setTwoDartCombinationsGameContext = createContext<
  Dispatch<SetStateAction<TwoDartCombinationsGame | null>>
>(() => undefined);

const TwoDartCombinationsGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<TwoDartCombinationsGame | null>(null);
  useEffect(() => {
    const g = new TwoDartCombinationsGame();
    const memoGame = localStorage.getItem('TwoDartCombinations');
    if (memoGame) {
      const progress = JSON.parse(memoGame);
      const { TwoDartCombinationsProgress } = createCheckers(types);
      if (TwoDartCombinationsProgress.test(progress)) g.resumeGame(progress);
    }
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('TwoDartCombinations', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <twoDartCombinationsGameContext.Provider value={game}>
      <setTwoDartCombinationsGameContext.Provider value={setGame}>
        {children}
      </setTwoDartCombinationsGameContext.Provider>
    </twoDartCombinationsGameContext.Provider>
  );
};

const useTwoDartCombinationsGame = () => useContext(twoDartCombinationsGameContext);
const useTwoDartCombinationsGameSet = () => useContext(setTwoDartCombinationsGameContext);

export {
  TwoDartCombinationsGameContextProvider,
  useTwoDartCombinationsGame,
  useTwoDartCombinationsGameSet,
};
