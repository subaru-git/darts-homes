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
import TwoDartCombinationsGame from '@/lib/TwoDartCombinationsGame/TwoDartCombinationsGame';

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
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('TwoDartCombinations', JSON.stringify(game.getProgressJson()));
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
