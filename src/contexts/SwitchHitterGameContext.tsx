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
import SwitchHitterGame from '@/lib/SwitchHitterGame/SwitchHitterGame';

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
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('SwitchHitter', JSON.stringify(game.getProgressJson()));
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
