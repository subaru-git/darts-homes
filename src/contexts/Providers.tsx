import React, { FC, ReactNode } from 'react';
import { CricketMarkUpGameContextProvider } from './CricketMarkUpGameContext';
import { DoubleTroubleGameContextProvider } from './DoubleTroubleGameContext';
import { EaglesEyeGameContextProvider } from './EaglesEyeGameContext';

const Providers: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <DoubleTroubleGameContextProvider>
      <CricketMarkUpGameContextProvider>
        <EaglesEyeGameContextProvider>{children}</EaglesEyeGameContextProvider>
      </CricketMarkUpGameContextProvider>
    </DoubleTroubleGameContextProvider>
  );
};

export default Providers;
