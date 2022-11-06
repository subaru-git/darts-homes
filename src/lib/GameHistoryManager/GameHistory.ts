import { IndexableType, Table } from 'dexie';
import fileDownload from 'js-file-download';
import { ResultModel } from '@/db/ResultModel';
import { db } from '@/db/db';

const importGameHistory = (gameHistory: GameResult, overwrite: boolean) => {
  try {
    importToDB(gameHistory.cricketmarkup, db.cricketMarkUpResult, overwrite);
    importToDB(gameHistory.eagleseye, db.eaglesEyeResult, overwrite);
    importToDB(gameHistory.doubletrouble, db.doubleTroubleResult, overwrite);
    importToDB(gameHistory.sweet16, db.sweet16Result, overwrite);
    importToDB(gameHistory.topsandtens, db.topsAndTensResult, overwrite);
  } catch (error) {
    console.log(error);
  }
};

const exportGameHistory = async () => {
  try {
    const cricketmarkup = await exportFromDB(db.cricketMarkUpResult);
    const eagleseye = await exportFromDB(db.eaglesEyeResult);
    const doubletrouble = await exportFromDB(db.doubleTroubleResult);
    const sweet16 = await exportFromDB(db.sweet16Result);
    const topsandtens = await exportFromDB(db.topsAndTensResult);
    fileDownload(
      JSON.stringify({ cricketmarkup, eagleseye, doubletrouble, sweet16, topsandtens }),
      'darts-games-history.json',
    );
  } catch (error) {
    console.error(error);
  }
};

function saveToDB<T>(history: T, db: Table<T, IndexableType>) {
  try {
    db.add(history);
  } catch (error) {
    console.error(error);
  }
}

function deleteFromDB<T>(id: number | undefined, db: Table<T, IndexableType>) {
  if (!id) return;
  try {
    db.delete(id);
  } catch (error) {
    console.error(error);
  }
}

function importToDB<T>(history: T[], table: Table<T, IndexableType>, overwrite: boolean) {
  if (history) {
    db.transaction('rw', table, () => {
      if (overwrite) table.clear();
      for (const h of history) {
        saveToDB(h, table);
      }
    });
  }
}

const exportFromDB = async (db: Table<ResultModel, IndexableType>) => {
  const result = await db.toArray();
  return result.map((r) => {
    if (r.id) delete r.id;
    return r;
  });
};

export { importGameHistory, exportGameHistory, saveToDB, deleteFromDB };
