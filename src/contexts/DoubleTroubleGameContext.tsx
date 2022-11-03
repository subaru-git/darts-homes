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
import DoubleTroubleGame from '@/lib/DoubleTroubleGame/DoubleTroubleGame';

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
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('DoubleTrouble', JSON.stringify(game.getProgressJson()));
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
