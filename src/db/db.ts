import Dexie, { Table } from 'dexie';

export interface CricketMarkUpResultModel {
  id?: number;
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

export interface EaglesEyeResultModel {
  id?: number;
  result: number;
  scores: point[][];
  playedAt: string;
}

export interface DoubleTroubleResultModel {
  id?: number;
  result: number;
  scores: point[][];
  playedAt: string;
}

export interface Sweet16ResultModel {
  id?: number;
  result: number;
  scores: point[][];
  playedAt: string;
}

export class GameResultDexie extends Dexie {
  cricketMarkUpResult!: Table<CricketMarkUpResultModel>;
  eaglesEyeResult!: Table<EaglesEyeResultModel>;
  doubleTroubleResult!: Table<DoubleTroubleResultModel>;
  sweet16Result!: Table<Sweet16ResultModel>;

  constructor() {
    super('DartsHomes');
    this.version(1.1).stores({
      cricketMarkUpResult: '++id',
      eaglesEyeResult: '++id',
      doubleTroubleResult: '++id',
      sweet16Result: '++id',
    });
  }
}

export const db = new GameResultDexie();
