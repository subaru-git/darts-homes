import fileDownload from 'js-file-download';
import { db } from '@/db/db';

const saveCricketMarkUpHistory = (history: CricketMarkUpResult) => {
  saveCricketMarkUpResultToDB(history);
};

const saveEaglesEyeHistory = (history: EaglesEyeResult) => {
  saveEaglesEyeResultToDB(history);
};

const deleteCricketMarkUpHistory = async (id: number | undefined) => {
  if (!id) return;
  try {
    await db.cricketMarkUpResult.delete(id);
  } catch (error) {
    console.error(error);
  }
};

const deleteEaglesEyeHistory = async (id: number | undefined) => {
  if (!id) return;
  try {
    await db.eaglesEyeResult.delete(id);
  } catch (error) {
    console.error(error);
  }
};

const importGameHistory = (gameHistory: GameResult, overwrite: boolean) => {
  try {
    db.transaction('rw', db.cricketMarkUpResult, () => {
      if (overwrite) db.cricketMarkUpResult.clear();
      for (const history of gameHistory.cricketmarkup) {
        saveCricketMarkUpResultToDB(history);
      }
    });
    db.transaction('rw', db.eaglesEyeResult, () => {
      if (overwrite) db.eaglesEyeResult.clear();
      for (const history of gameHistory.eagleseye) {
        saveEaglesEyeResultToDB(history);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const exportGameHistory = async () => {
  try {
    const cricketmarkupResult = await db.cricketMarkUpResult.toArray();
    const cricketmarkup = cricketmarkupResult.map((r) => {
      delete r.id;
      return r;
    });
    const eagleseyeResult = await db.eaglesEyeResult.toArray();
    const eagleseye = eagleseyeResult.map((r) => {
      delete r.id;
      return r;
    });
    fileDownload(JSON.stringify({ cricketmarkup, eagleseye }), 'darts-games-history.json');
  } catch (error) {
    console.error(error);
  }
};

const saveCricketMarkUpResultToDB = async (history: CricketMarkUpResult) => {
  try {
    await db.cricketMarkUpResult.add(history);
  } catch (error) {
    console.error(error);
  }
};

const saveEaglesEyeResultToDB = async (history: EaglesEyeResult) => {
  try {
    await db.eaglesEyeResult.add(history);
  } catch (error) {
    console.error(error);
  }
};

export {
  saveCricketMarkUpHistory,
  saveEaglesEyeHistory,
  deleteCricketMarkUpHistory,
  deleteEaglesEyeHistory,
  importGameHistory,
  exportGameHistory,
};
