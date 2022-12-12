import React, { FC, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import Board from '@/containers/History/Board';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/db/db';
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
  const cricketMarkUp = await db.cricketMarkUpResult.toCollection().reverse().sortBy('playedAt');
  const eaglesEye = await db.eaglesEyeResult.toCollection().reverse().sortBy('playedAt');
  const doubleTrouble = await db.doubleTroubleResult.toCollection().reverse().sortBy('playedAt');
  const sweet16 = await db.sweet16Result.toCollection().reverse().sortBy('playedAt');
  const topsAndTens = await db.topsAndTensResult.toCollection().reverse().sortBy('playedAt');
  const twoDartCombinations = await db.twoDartCombinationsResult
    .toCollection()
    .reverse()
    .sortBy('playedAt');
  const aroundTheCompass = await db.aroundTheCompassResult
    .toCollection()
    .reverse()
    .sortBy('playedAt');
  const tonsUp = await db.tonsUpResult.toCollection().reverse().sortBy('playedAt');
  const route64 = await db.route64Result.toCollection().reverse().sortBy('playedAt');
  const eightyThrew = await db.eightyThrewResult.toCollection().reverse().sortBy('playedAt');
  const shanghaiNights = await db.shanghaiNightsResult.toCollection().reverse().sortBy('playedAt');
  const switchHitter = await db.switchHitterResult.toCollection().reverse().sortBy('playedAt');
  const bullyBully = await db.bullyBullyResult.toCollection().reverse().sortBy('playedAt');
  const treblesForShow = await db.treblesForShowResult.toCollection().reverse().sortBy('playedAt');
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
  };
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
};

export default Main;
