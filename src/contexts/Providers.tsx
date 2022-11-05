import React, { FC, ReactNode } from 'react';
import { CricketMarkUpGameContextProvider } from './CricketMarkUpGameContext';
import { DoubleTroubleGameContextProvider } from './DoubleTroubleGameContext';
import { EaglesEyeGameContextProvider } from './EaglesEyeGameContext';
import { Sweet16GameContextProvider } from './Sweet16Context';
import { TopsAndTensGameContextProvider } from './TopsAndTensContext';

const Providers: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <TopsAndTensGameContextProvider>
      <Sweet16GameContextProvider>
        <DoubleTroubleGameContextProvider>
          <CricketMarkUpGameContextProvider>
            <EaglesEyeGameContextProvider>{children}</EaglesEyeGameContextProvider>
          </CricketMarkUpGameContextProvider>
        </DoubleTroubleGameContextProvider>
      </Sweet16GameContextProvider>
    </TopsAndTensGameContextProvider>
  );
};

export default Providers;
