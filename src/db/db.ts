import Dexie, { Table } from 'dexie';

export interface ResultModel {
  id?: number;
}

export interface CricketMarkUpResultModel extends ResultModel {
  targetCount: number;
  result: number;
  scores: CricketMarkUpScoreModel[];
  playedAt: string;
}

export interface CricketMarkUpScoreModel {
  number: number;
  count: number;
  total: number;
}

export interface EaglesEyeResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}

export interface DoubleTroubleResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}

export interface Sweet16ResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}

export interface TopsAndTensResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}

export class GameResultDexie extends Dexie {
  cricketMarkUpResult!: Table<CricketMarkUpResultModel>;
  eaglesEyeResult!: Table<EaglesEyeResultModel>;
  doubleTroubleResult!: Table<DoubleTroubleResultModel>;
  sweet16Result!: Table<Sweet16ResultModel>;
  topsAndTensResult!: Table<TopsAndTensResultModel>;

  constructor() {
    super('DartsHomes');
    this.version(1.2).stores({
      cricketMarkUpResult: '++id',
      eaglesEyeResult: '++id',
      doubleTroubleResult: '++id',
      sweet16Result: '++id',
      topsAndTensResult: '++id',
    });
  }
}

export const db = new GameResultDexie();
