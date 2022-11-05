import React, { FC, ReactNode } from 'react';
import { CricketMarkUpGameContextProvider } from './CricketMarkUpGameContext';
import { DoubleTroubleGameContextProvider } from './DoubleTroubleGameContext';
import { EaglesEyeGameContextProvider } from './EaglesEyeGameContext';
import { Sweet16GameContextProvider } from './Sweet16Context';

const Providers: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <Sweet16GameContextProvider>
      <DoubleTroubleGameContextProvider>
        <CricketMarkUpGameContextProvider>
          <EaglesEyeGameContextProvider>{children}</EaglesEyeGameContextProvider>
        </CricketMarkUpGameContextProvider>
      </DoubleTroubleGameContextProvider>
    </Sweet16GameContextProvider>
  );
};

export default Providers;
