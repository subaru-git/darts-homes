'use client';
import React, { FC, ReactNode } from 'react';
import { AroundTheCompassGameContextProvider } from './AroundTheCompassGameContext';
import { ArrangeGameContextProvider } from './ArrangeGameContext';
import { AuthProvider } from './AuthContext';
import { BullyBullyGameContextProvider } from './BullyBullyGameContext';
import { CountUpGameContextProvider } from './CountUpGameContext';
import { CricketMarkUpGameContextProvider } from './CricketMarkUpGameContext';
import { DoubleTroubleGameContextProvider } from './DoubleTroubleGameContext';
import { EaglesEyeGameContextProvider } from './EaglesEyeGameContext';
import { EightyThrewGameContextProvider } from './EightyThrewGameContext';
import { Route64GameContextProvider } from './Route64GameContext';
import { ShanghaiNightsGameContextProvider } from './ShanghaiNightsGameContext';
import { Sweet16GameContextProvider } from './Sweet16Context';
import { SwitchHitterGameContextProvider } from './SwitchHitterGameContext';
import { TonsUpGameContextProvider } from './TonsUpGameContext';
import { TopsAndTensGameContextProvider } from './TopsAndTensContext';
import { TreblesForShowGameContextProvider } from './TreblesForShowGameContext';
import { TwoDartCombinationsGameContextProvider } from './TwoDartCombinationsGameContext';

const Providers: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <ArrangeGameContextProvider>
      <TreblesForShowGameContextProvider>
        <BullyBullyGameContextProvider>
          <SwitchHitterGameContextProvider>
            <ShanghaiNightsGameContextProvider>
              <EightyThrewGameContextProvider>
                <Route64GameContextProvider>
                  <TonsUpGameContextProvider>
                    <AroundTheCompassGameContextProvider>
                      <TwoDartCombinationsGameContextProvider>
                        <TopsAndTensGameContextProvider>
                          <Sweet16GameContextProvider>
                            <DoubleTroubleGameContextProvider>
                              <CricketMarkUpGameContextProvider>
                                <EaglesEyeGameContextProvider>
                                  <CountUpGameContextProvider>
                                    <AuthProvider>{children}</AuthProvider>
                                  </CountUpGameContextProvider>
                                </EaglesEyeGameContextProvider>
                              </CricketMarkUpGameContextProvider>
                            </DoubleTroubleGameContextProvider>
                          </Sweet16GameContextProvider>
                        </TopsAndTensGameContextProvider>
                      </TwoDartCombinationsGameContextProvider>
                    </AroundTheCompassGameContextProvider>
                  </TonsUpGameContextProvider>
                </Route64GameContextProvider>
              </EightyThrewGameContextProvider>
            </ShanghaiNightsGameContextProvider>
          </SwitchHitterGameContextProvider>
        </BullyBullyGameContextProvider>
      </TreblesForShowGameContextProvider>
    </ArrangeGameContextProvider>
  );
};

export default Providers;
