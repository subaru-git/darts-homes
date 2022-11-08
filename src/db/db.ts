import Dexie, { Table } from 'dexie';
import { AroundTheCompassResultModel } from './AroundTheCompassResultModel';
import { BullyBullyResultModel } from './BullyBullyResultModel';
import { CricketMarkUpResultModel } from './CricketMarkUpResultModel';
import { DoubleTroubleResultModel } from './DoubleTroubleResultModel';
import { EaglesEyeResultModel } from './EaglesEyeResultModel';
import { EightyThrewResultModel } from './EightyThrewResultModel';
import { Route64ResultModel } from './Route64ResultModel';
import { ShanghaiNightsResultModel } from './ShanghaiNightsResultModel';
import { Sweet16ResultModel } from './Sweet16ResultModel';
import { SwitchHitterResultModel } from './SwitchHitterResultModel';
import { TonsUpResultModel } from './TonsUpResultModel';
import { TopsAndTensResultModel } from './TopsAndTensResultModel';
import { TreblesForShowResultModel } from './TreblesForShowResultModel';
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
  route64Result!: Table<Route64ResultModel>;
  eightyThrewResult!: Table<EightyThrewResultModel>;
  shanghaiNightsResult!: Table<ShanghaiNightsResultModel>;
  switchHitterResult!: Table<SwitchHitterResultModel>;
  bullyBullyResult!: Table<BullyBullyResultModel>;
  treblesForShowResult!: Table<TreblesForShowResultModel>;

  constructor() {
    super('DartsHomes');
    this.version(1.3).stores({
      cricketMarkUpResult: '++id',
      eaglesEyeResult: '++id',
      doubleTroubleResult: '++id',
      sweet16Result: '++id',
      topsAndTensResult: '++id',
      twoDartCombinationsResult: '++id',
      aroundTheCompassResult: '++id',
      tonsUpResult: '++id',
      route64Result: '++id',
      eightyThrewResult: '++id',
      shanghaiNightsResult: '++id',
      switchHitterResult: '++id',
      bullyBullyResult: '++id',
      treblesForShowResult: '++id',
    });
  }
}

export const db = new GameResultDexie();
