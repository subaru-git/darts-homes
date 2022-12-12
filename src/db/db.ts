import Dexie, { Table } from 'dexie';

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
    this.version(1.4).stores({
      cricketMarkUpResult: 'uuid',
      eaglesEyeResult: 'uuid',
      doubleTroubleResult: 'uuid',
      sweet16Result: 'uuid',
      topsAndTensResult: 'uuid',
      twoDartCombinationsResult: 'uuid',
      aroundTheCompassResult: 'uuid',
      tonsUpResult: 'uuid',
      route64Result: 'uuid',
      eightyThrewResult: 'uuid',
      shanghaiNightsResult: 'uuid',
      switchHitterResult: 'uuid',
      bullyBullyResult: 'uuid',
      treblesForShowResult: 'uuid',
    });
  }
}

export const db = new GameResultDexie();
