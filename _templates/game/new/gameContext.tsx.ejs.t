---
to: src/contexts/<%= name %>GameContext.tsx
---
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
import <%= name %>Game from '@/lib/<%= name %>Game/<%= name %>Game';

const <%= h.changeCase.camel(name) %>GameContext = createContext<<%= name %>Game | null>(new <%= name %>Game());
const set<%= name %>GameContext = createContext<Dispatch<SetStateAction<<%= name %>Game | null>>>(
  () => undefined,
);

const <%= name %>GameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<<%= name %>Game | null>(null);
  useEffect(() => {
    const g = new <%= name %>Game();
    const memoGame = localStorage.getItem('<%= name %>');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('<%= name %>', JSON.stringify(game.getGameProgress()));
  }, [game]);
  return (
    <<%= h.changeCase.camel(name) %>GameContext.Provider value={game}>
      <set<%= name %>GameContext.Provider value={setGame}>{children}</set<%= name %>GameContext.Provider>
    </<%= h.changeCase.camel(name) %>GameContext.Provider>
  );
};

const use<%= name %>Game = () => useContext(<%= h.changeCase.camel(name) %>GameContext);
const use<%= name %>GameSet = () => useContext(set<%= name %>GameContext);

export { <%= name %>GameContextProvider, use<%= name %>Game, use<%= name %>GameSet };
