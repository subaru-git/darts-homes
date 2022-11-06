import React, { FC, ReactNode } from 'react';
import { CricketMarkUpGameContextProvider } from './CricketMarkUpGameContext';
import { DoubleTroubleGameContextProvider } from './DoubleTroubleGameContext';
import { EaglesEyeGameContextProvider } from './EaglesEyeGameContext';
import { Sweet16GameContextProvider } from './Sweet16Context';
import { TopsAndTensGameContextProvider } from './TopsAndTensContext';
import { TwoDartCombinationsGameContextProvider } from './TwoDartCombinationsGameContext';

const Providers: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <TwoDartCombinationsGameContextProvider>
      <TopsAndTensGameContextProvider>
        <Sweet16GameContextProvider>
          <DoubleTroubleGameContextProvider>
            <CricketMarkUpGameContextProvider>
              <EaglesEyeGameContextProvider>{children}</EaglesEyeGameContextProvider>
            </CricketMarkUpGameContextProvider>
          </DoubleTroubleGameContextProvider>
        </Sweet16GameContextProvider>
      </TopsAndTensGameContextProvider>
    </TwoDartCombinationsGameContextProvider>
  );
};

export default Providers;
