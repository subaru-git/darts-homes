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
import AroundTheCompassGame from '@/lib/AroundTheCompassGame/AroundTheCompassGame';

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
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('AroundTheCompass', JSON.stringify(game.getProgressJson()));
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
