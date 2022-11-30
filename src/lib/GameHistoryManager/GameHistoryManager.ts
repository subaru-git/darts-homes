import { IndexableType, Table } from 'dexie';
import fileDownload from 'js-file-download';
import { ResultModel } from '@/db/ResultModel';
import { db } from '@/db/db';

export const importGameHistory = (gameHistory: GameResult, overwrite: boolean) => {
  try {
    importToDB(gameHistory.cricketmarkup, db.cricketMarkUpResult, overwrite);
    importToDB(gameHistory.eagleseye, db.eaglesEyeResult, overwrite);
    importToDB(gameHistory.doubletrouble, db.doubleTroubleResult, overwrite);
    importToDB(gameHistory.sweet16, db.sweet16Result, overwrite);
    importToDB(gameHistory.topsandtens, db.topsAndTensResult, overwrite);
    importToDB(gameHistory.twodartcombinations, db.twoDartCombinationsResult, overwrite);
    importToDB(gameHistory.aroundthecompass, db.aroundTheCompassResult, overwrite);
    importToDB(gameHistory.tonsup, db.tonsUpResult, overwrite);
    importToDB(gameHistory.route64, db.route64Result, overwrite);
    importToDB(gameHistory.eightythrew, db.eightyThrewResult, overwrite);
    importToDB(gameHistory.shanghainights, db.shanghaiNightsResult, overwrite);
    importToDB(gameHistory.switchhitter, db.switchHitterResult, overwrite);
    importToDB(gameHistory.bullybully, db.bullyBullyResult, overwrite);
    importToDB(gameHistory.treblesforshow, db.treblesForShowResult, overwrite);
  } catch (error) {
    console.log(error);
  }
};

export const exportGameHistory = async () => {
  try {
    const cricketmarkup = await exportFromDB(db.cricketMarkUpResult);
    const eagleseye = await exportFromDB(db.eaglesEyeResult);
    const doubletrouble = await exportFromDB(db.doubleTroubleResult);
    const sweet16 = await exportFromDB(db.sweet16Result);
    const topsandtens = await exportFromDB(db.topsAndTensResult);
    const twodartcombinations = await exportFromDB(db.twoDartCombinationsResult);
    const aroundthecompass = await exportFromDB(db.aroundTheCompassResult);
    const tonsup = await exportFromDB(db.tonsUpResult);
    const route64 = await exportFromDB(db.route64Result);
    const eightythrew = await exportFromDB(db.eightyThrewResult);
    const shanghainights = await exportFromDB(db.shanghaiNightsResult);
    const switchhitter = await exportFromDB(db.switchHitterResult);
    const bullybully = await exportFromDB(db.bullyBullyResult);
    const treblesforshow = await exportFromDB(db.treblesForShowResult);
    fileDownload(
      JSON.stringify({
        cricketmarkup,
        eagleseye,
        doubletrouble,
        sweet16,
        topsandtens,
        twodartcombinations,
        aroundthecompass,
        tonsup,
        route64,
        eightythrew,
        shanghainights,
        switchhitter,
        bullybully,
        treblesforshow,
      }),
      'darts-homes-history.json',
    );
  } catch (error) {
    console.error(error);
  }
};

export const saveToDB = <T>(history: T, db: Table<T, IndexableType>) => {
  try {
    db.add(history);
  } catch (error) {
    console.error(error);
  }
};

export const deleteFromDB = <T>(id: number | undefined, db: Table<T, IndexableType>) => {
  if (!id) return;
  try {
    db.delete(id);
  } catch (error) {
    console.error(error);
  }
};

export const importToDB = <T>(history: T[], table: Table<T, IndexableType>, overwrite: boolean) => {
  if (history) {
    db.transaction('rw', table, () => {
      if (overwrite) table.clear();
      for (const h of history) saveToDB(h, table);
    });
  }
};

export const exportFromDB = async (db: Table<ResultModel, IndexableType>) => {
  const result = await db.toArray();
  return result.map((r) => {
    if (r.id) delete r.id;
    return r;
  });
};
