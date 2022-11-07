import Dexie, { Table } from 'dexie';
import { AroundTheCompassResultModel } from './AroundTheCompassResultModel';
import { CricketMarkUpResultModel } from './CricketMarkUpResultModel';
import { DoubleTroubleResultModel } from './DoubleTroubleResultModel';
import { EaglesEyeResultModel } from './EaglesEyeResultModel';
import { Sweet16ResultModel } from './Sweet16ResultModel';
import { TonsUpResultModel } from './TonsUpResultModel';
import { TopsAndTensResultModel } from './TopsAndTensResultModel';
import { TwoDartCombinationsResultModel } from './TwoDartCombinationsResultModel';

export class GameResultDexie extends Dexie {
  cricketMarkUpResult!: Table<CricketMarkUpResultModel>;
  eaglesEyeResult!: Table<EaglesEyeResultModel>;
  doubleTroubleResult!: Table<DoubleTroubleResultModel>;
  sweet16Result!: Table<Sweet16ResultModel>;
  topsAndTensResult!: Table<TopsAndTensResultModel>;
  twoDartCombinationsResult!: Table<TwoDartCombinationsResultModel>;
  aroundTheCompassResult!: Table<AroundTheCompassResultModel>;
  tonsUpResult!: Table<TonsUpResultModel>;

  constructor() {
    super('DartsHomes');
    this.version(1.2).stores({
      cricketMarkUpResult: '++id',
      eaglesEyeResult: '++id',
      doubleTroubleResult: '++id',
      sweet16Result: '++id',
      topsAndTensResult: '++id',
      twoDartCombinationsResult: '++id',
      aroundTheCompassResult: '++id',
      tonsUpResult: '++id',
    });
  }
}

export const db = new GameResultDexie();
