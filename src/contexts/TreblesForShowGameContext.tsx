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
import TreblesForShowGame from '@/lib/TreblesForShowGame/TreblesForShowGame';

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
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('TreblesForShow', JSON.stringify(game.getProgressJson()));
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
