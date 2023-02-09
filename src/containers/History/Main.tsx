import React, { FC, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import Board from '@/containers/History/Board';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/db/db';
import { readResult } from '@/lib/GameHistoryManager';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  const [loading, setLoading] = useState(true);
  const user = useAuth();
  const gameHistory = useLiveQuery(async () => querier(setLoading)) || initialQuery;
  if (loading) return <MainTemplate label='history-main' isLoading />;
  return (
    <MainTemplate label='history-main'>
      <Board history={gameHistory} user={user} />
    </MainTemplate>
  );
};

const querier = async (setLoading: (isLoading: boolean) => void): Promise<GameResultModel> => {
  try {
    const cricketMarkUp = await readResult(db.cricketMarkUpResult);
    const eaglesEye = await readResult(db.eaglesEyeResult);
    const doubleTrouble = await readResult(db.doubleTroubleResult);
    const sweet16 = await readResult(db.sweet16Result);
    const topsAndTens = await readResult(db.topsAndTensResult);
    const twoDartCombinations = await readResult(db.twoDartCombinationsResult);
    const aroundTheCompass = await readResult(db.aroundTheCompassResult);
    const tonsUp = await readResult(db.tonsUpResult);
    const route64 = await readResult(db.route64Result);
    const eightyThrew = await readResult(db.eightyThrewResult);
    const shanghaiNights = await readResult(db.shanghaiNightsResult);
    const switchHitter = await readResult(db.switchHitterResult);
    const bullyBully = await readResult(db.bullyBullyResult);
    const treblesForShow = await readResult(db.treblesForShowResult);
    const arrange = await readResult(db.arrangeResult);
    const countUp = await readResult(db.countUpResult);
    setLoading(false);
    return {
      cricketMarkUp,
      eaglesEye,
      doubleTrouble,
      sweet16,
      topsAndTens,
      twoDartCombinations,
      aroundTheCompass,
      tonsUp,
      route64,
      eightyThrew,
      shanghaiNights,
      switchHitter,
      bullyBully,
      treblesForShow,
      arrange,
      countUp,
    };
  } catch (e) {
    console.log('querier exception!!', e);
    return initialQuery;
  }
};

const initialQuery: GameResultModel = {
  cricketMarkUp: [],
  eaglesEye: [],
  doubleTrouble: [],
  sweet16: [],
  topsAndTens: [],
  twoDartCombinations: [],
  aroundTheCompass: [],
  tonsUp: [],
  route64: [],
  eightyThrew: [],
  shanghaiNights: [],
  switchHitter: [],
  bullyBully: [],
  treblesForShow: [],
  arrange: [],
  countUp: [],
};

export default Main;
