import { IndexableType, Table } from 'dexie';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { convertGameResultToFirebaseResult } from '../Helper/Converter';
import { db } from '@/db/db';
import { db as firestore } from '@/firebase/client';

export const importGameHistory = (
  gameHistory: GameResult,
  overwrite: boolean,
  user: User | null | undefined,
) => {
  console.log('importGameHistory', gameHistory, overwrite, user);
  try {
    importToDB(gameHistory.cricketMarkUp, db.cricketMarkUpResult, overwrite);
    importToDB(gameHistory.eaglesEye, db.eaglesEyeResult, overwrite);
    importToDB(gameHistory.doubleTrouble, db.doubleTroubleResult, overwrite);
    importToDB(gameHistory.sweet16, db.sweet16Result, overwrite);
    importToDB(gameHistory.topsAndTens, db.topsAndTensResult, overwrite);
    importToDB(gameHistory.twoDartCombinations, db.twoDartCombinationsResult, overwrite);
    importToDB(gameHistory.aroundTheCompass, db.aroundTheCompassResult, overwrite);
    importToDB(gameHistory.tonsUp, db.tonsUpResult, overwrite);
    importToDB(gameHistory.route64, db.route64Result, overwrite);
    importToDB(gameHistory.eightyThrew, db.eightyThrewResult, overwrite);
    importToDB(gameHistory.shanghaiNights, db.shanghaiNightsResult, overwrite);
    importToDB(gameHistory.switchHitter, db.switchHitterResult, overwrite);
    importToDB(gameHistory.bullyBully, db.bullyBullyResult, overwrite);
    importToDB(gameHistory.treblesForShow, db.treblesForShowResult, overwrite);
    importToDB(gameHistory.countUp, db.countUpResult, overwrite);
    updateHistory(user);
  } catch (error) {
    console.log(error);
  }
};

export const exportGameHistory = async (): Promise<GameResultModel | undefined> => {
  try {
    const [
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
      countUp,
    ] = await Promise.all([
      exportFromDB<CricketMarkUpResultModel>(db.cricketMarkUpResult),
      exportFromDB<EaglesEyeResultModel>(db.eaglesEyeResult),
      exportFromDB<DoubleTroubleResultModel>(db.doubleTroubleResult),
      exportFromDB<Sweet16ResultModel>(db.sweet16Result),
      exportFromDB<TopsAndTensResultModel>(db.topsAndTensResult),
      exportFromDB<TwoDartCombinationsResultModel>(db.twoDartCombinationsResult),
      exportFromDB<AroundTheCompassResultModel>(db.aroundTheCompassResult),
      exportFromDB<TonsUpResultModel>(db.tonsUpResult),
      exportFromDB<Route64ResultModel>(db.route64Result),
      exportFromDB<EightyThrewResultModel>(db.eightyThrewResult),
      exportFromDB<ShanghaiNightsResultModel>(db.shanghaiNightsResult),
      exportFromDB<SwitchHitterResultModel>(db.switchHitterResult),
      exportFromDB<BullyBullyResultModel>(db.bullyBullyResult),
      exportFromDB<TreblesForShowResultModel>(db.treblesForShowResult),
      exportFromDB<CountUpResultModel>(db.countUpResult),
    ]);
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
      countUp,
    };
  } catch (error) {
    console.error(error);
  }
};

export const updateLocalHistory = (gameHistory: GameResultModel) => {
  try {
    updateToDB(gameHistory.cricketMarkUp, db.cricketMarkUpResult);
    updateToDB(gameHistory.eaglesEye, db.eaglesEyeResult);
    updateToDB(gameHistory.doubleTrouble, db.doubleTroubleResult);
    updateToDB(gameHistory.sweet16, db.sweet16Result);
    updateToDB(gameHistory.topsAndTens, db.topsAndTensResult);
    updateToDB(gameHistory.twoDartCombinations, db.twoDartCombinationsResult);
    updateToDB(gameHistory.aroundTheCompass, db.aroundTheCompassResult);
    updateToDB(gameHistory.tonsUp, db.tonsUpResult);
    updateToDB(gameHistory.route64, db.route64Result);
    updateToDB(gameHistory.eightyThrew, db.eightyThrewResult);
    updateToDB(gameHistory.shanghaiNights, db.shanghaiNightsResult);
    updateToDB(gameHistory.switchHitter, db.switchHitterResult);
    updateToDB(gameHistory.bullyBully, db.bullyBullyResult);
    updateToDB(gameHistory.treblesForShow, db.treblesForShowResult);
    updateToDB(gameHistory.countUp, db.countUpResult);
  } catch (error) {
    console.log(error);
  }
};

export const deleteResult = async (
  uuid: string,
  table: Table<ResultModel, IndexableType>,
  user: User | null | undefined,
) => {
  if (!uuid) return;
  try {
    await db.transaction('rw', table, () => {
      table.delete(uuid);
    });
    await updateHistory(user);
  } catch (error) {
    console.error(error);
  }
};

export const updateHistory = async (user: User | null | undefined) => {
  if (!user) return;
  const history = (await exportGameHistory()) ?? {};
  const ref = doc(firestore, `users/${user.id}`);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { history: convertGameResultToFirebaseResult(history) });
  }
};

export const deleteFromFirebase = async (uuid: string, user: User | null | undefined) => {
  if (!uuid || !user) return;
  user.history = deleteHistory(uuid, user.history);
  const ref = doc(firestore, `users/${user.id}`);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { history: convertGameResultToFirebaseResult(user.history) });
  }
};

export const deleteHistory = (uuid: string, history: GameResultModel) => {
  Object.keys(history).forEach((k) => {
    const key: keyof GameResultModel = k as keyof GameResultModel;
    history[key] = (history[key] as any[])?.filter((h: ResultModel) => h.uuid !== uuid);
    if (history[key]?.length === 0) history[key] = undefined;
  });
  return history;
};

export const saveHistory = async <T>(
  history: T,
  db: Table<T, IndexableType>,
  user: User | null | undefined,
) => {
  try {
    await db.add({ ...history, uuid: uuidv4() });
    await updateHistory(user);
  } catch (error) {
    console.error('save history exception', error);
  }
};

export const readResult = async <T>(db: Table<T, IndexableType>) => {
  try {
    return await db.toCollection().reverse().sortBy('playedAt');
  } catch (error) {
    return [];
  }
};

export const importToDB = <T>(
  history: T[] | undefined,
  table: Table<T, IndexableType>,
  overwrite: boolean,
) => {
  console.log('importToDB', history, table, overwrite);
  if (!history) return;
  db.transaction('rw', table, () => {
    if (overwrite) table.clear();
    for (const h of history) saveToDB({ ...h, uuid: uuidv4() }, table);
  });
};

export const updateToDB = <T>(history: T[] | undefined, table: Table<T, IndexableType>) => {
  if (!history) return;
  db.transaction('rw', table, () => {
    table.clear();
    for (const h of history) saveToDB(h, table);
  });
};

export const saveToDB = <T>(history: T, db: Table<T, IndexableType>) => {
  try {
    db.add(history);
  } catch (error) {
    console.error(error);
  }
};

export const exportFromDB = async <T>(db: Table<ResultModel, IndexableType>): Promise<T[]> => {
  const result = await db.toArray();
  return result.map((r) => {
    if (r.id) delete r.id;
    return r as T;
  });
};

export const mergeGameHistory = (h1: GameResultModel, h2: GameResultModel) => {
  const keys = Array.from(new Set([...Object.keys(h1), ...Object.keys(h2)]));
  const result: GameResultModel = {};
  keys.forEach((k) => {
    const key: keyof GameResultModel = k as keyof GameResultModel;
    result[key] = mergeHistory(h1[key], h2[key]) as any[];
  });
  return result;
};

export const mergeHistory = (h1: ResultModel[] | undefined, h2: ResultModel[] | undefined) => {
  if (!h1 && !h2) return undefined;
  if (!h1) return h2;
  if (!h2) return h1;
  return Array.from(new Map([...h1, ...h2].map((h) => [h.uuid, h])).values());
};
