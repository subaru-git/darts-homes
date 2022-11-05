import fileDownload from 'js-file-download';
import { db } from '@/db/db';

const saveCricketMarkUpHistory = (history: CricketMarkUpResult) => {
  saveCricketMarkUpResultToDB(history);
};

const saveEaglesEyeHistory = (history: EaglesEyeResult) => {
  saveEaglesEyeResultToDB(history);
};

const saveDoubleTroubleHistory = (history: DoubleTroubleResult) => {
  saveDoubleTroubleResultToDB(history);
};

const saveSweet16History = (history: Sweet16Result) => {
  saveSweet16ResultToDB(history);
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

const deleteDoubleTroubleHistory = async (id: number | undefined) => {
  if (!id) return;
  try {
    await db.doubleTroubleResult.delete(id);
  } catch (error) {
    console.error(error);
  }
};

const deleteSweet16History = async (id: number | undefined) => {
  if (!id) return;
  try {
    await db.sweet16Result.delete(id);
  } catch (error) {
    console.error(error);
  }
};

const importGameHistory = (gameHistory: GameResult, overwrite: boolean) => {
  try {
    if (gameHistory.cricketmarkup) {
      db.transaction('rw', db.cricketMarkUpResult, () => {
        if (overwrite) db.cricketMarkUpResult.clear();
        for (const history of gameHistory.cricketmarkup) {
          saveCricketMarkUpResultToDB(history);
        }
      });
    }
    if (gameHistory.eagleseye) {
      db.transaction('rw', db.eaglesEyeResult, () => {
        if (overwrite) db.eaglesEyeResult.clear();
        for (const history of gameHistory.eagleseye) {
          saveEaglesEyeResultToDB(history);
        }
      });
    }
    if (gameHistory.doubletrouble) {
      db.transaction('rw', db.doubleTroubleResult, () => {
        if (overwrite) db.doubleTroubleResult.clear();
        for (const history of gameHistory.doubletrouble) {
          saveDoubleTroubleHistory(history);
        }
      });
    }
    if (gameHistory.sweet16) {
      db.transaction('rw', db.sweet16Result, () => {
        if (overwrite) db.sweet16Result.clear();
        for (const history of gameHistory.sweet16) {
          saveSweet16History(history);
        }
      });
    }
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
    const doubletroubleResult = await db.doubleTroubleResult.toArray();
    const doubletrouble = doubletroubleResult.map((r) => {
      delete r.id;
      return r;
    });
    fileDownload(
      JSON.stringify({ cricketmarkup, eagleseye, doubletrouble }),
      'darts-games-history.json',
    );
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

const saveDoubleTroubleResultToDB = async (history: DoubleTroubleResult) => {
  try {
    await db.doubleTroubleResult.add(history);
  } catch (error) {
    console.error(error);
  }
};

const saveSweet16ResultToDB = async (history: Sweet16Result) => {
  try {
    await db.sweet16Result.add(history);
  } catch (error) {
    console.error(error);
  }
};

export {
  saveCricketMarkUpHistory,
  saveEaglesEyeHistory,
  saveDoubleTroubleHistory,
  saveSweet16History,
  deleteCricketMarkUpHistory,
  deleteEaglesEyeHistory,
  deleteDoubleTroubleHistory,
  deleteSweet16History,
  importGameHistory,
  exportGameHistory,
};
