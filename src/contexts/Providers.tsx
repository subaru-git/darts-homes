import React, { FC, ReactNode } from 'react';
import { AroundTheCompassGameContextProvider } from './AroundTheCompassGameContext';
import { CricketMarkUpGameContextProvider } from './CricketMarkUpGameContext';
import { DoubleTroubleGameContextProvider } from './DoubleTroubleGameContext';
import { EaglesEyeGameContextProvider } from './EaglesEyeGameContext';
import { EightyThrewGameContextProvider } from './EightyThrewGameContext';
import { Route64GameContextProvider } from './Route64GameContext';
import { Sweet16GameContextProvider } from './Sweet16Context';
import { TonsUpGameContextProvider } from './TonsUpGameContext';
import { TopsAndTensGameContextProvider } from './TopsAndTensContext';
import { TwoDartCombinationsGameContextProvider } from './TwoDartCombinationsGameContext';

const Providers: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <EightyThrewGameContextProvider>
      <Route64GameContextProvider>
        <TonsUpGameContextProvider>
          <AroundTheCompassGameContextProvider>
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
          </AroundTheCompassGameContextProvider>
        </TonsUpGameContextProvider>
      </Route64GameContextProvider>
    </EightyThrewGameContextProvider>
  );
};

export default Providers;
