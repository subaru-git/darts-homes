import Dexie, { Table } from 'dexie';
import { v4 as uuidv4 } from 'uuid';

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
  arrangeResult!: Table<ArrangeResultModel>;

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
      route64Result: '++id',
      eightyThrewResult: '++id',
      shanghaiNightsResult: '++id',
      switchHitterResult: '++id',
      bullyBullyResult: '++id',
      treblesForShowResult: '++id',
    });
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
    this.version(1.4)
      .stores({
        cricketMarkUpResult: null,
        eaglesEyeResult: null,
        doubleTroubleResult: null,
        sweet16Result: null,
        topsAndTensResult: null,
        twoDartCombinationsResult: null,
        aroundTheCompassResult: null,
        tonsUpResult: null,
        route64Result: null,
        eightyThrewResult: null,
        shanghaiNightsResult: null,
        switchHitterResult: null,
        bullyBullyResult: null,
        treblesForShowResult: null,
        cricketMarkUpResultTemp: 'uuid',
        eaglesEyeResultTemp: 'uuid',
        doubleTroubleResultTemp: 'uuid',
        sweet16ResultTemp: 'uuid',
        topsAndTensResultTemp: 'uuid',
        twoDartCombinationsResultTemp: 'uuid',
        aroundTheCompassResultTemp: 'uuid',
        tonsUpResultTemp: 'uuid',
        route64ResultTemp: 'uuid',
        eightyThrewResultTemp: 'uuid',
        shanghaiNightsResultTemp: 'uuid',
        switchHitterResultTemp: 'uuid',
        bullyBullyResultTemp: 'uuid',
        treblesForShowResultTemp: 'uuid',
      })
      .upgrade(async (t) => {
        const copyToTemp = async (name: string) => {
          const data = await t.table(name).toArray();
          await t.table(`${name}Temp`).bulkAdd(data.map((d) => ({ ...d, uuid: uuidv4() })));
        };
        await Promise.all([
          copyToTemp('cricketMarkUpResult'),
          copyToTemp('eaglesEyeResult'),
          copyToTemp('doubleTroubleResult'),
          copyToTemp('sweet16Result'),
          copyToTemp('topsAndTensResult'),
          copyToTemp('twoDartCombinationsResult'),
          copyToTemp('aroundTheCompassResult'),
          copyToTemp('tonsUpResult'),
          copyToTemp('route64Result'),
          copyToTemp('eightyThrewResult'),
          copyToTemp('shanghaiNightsResult'),
          copyToTemp('switchHitterResult'),
          copyToTemp('bullyBullyResult'),
          copyToTemp('treblesForShowResult'),
        ]);
      });
    this.version(2.0)
      .stores({
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
        cricketMarkUpResultTemp: null,
        eaglesEyeResultTemp: null,
        doubleTroubleResultTemp: null,
        sweet16ResultTemp: null,
        topsAndTensResultTemp: null,
        twoDartCombinationsResultTemp: null,
        aroundTheCompassResultTemp: null,
        tonsUpResultTemp: null,
        route64ResultTemp: null,
        eightyThrewResultTemp: null,
        shanghaiNightsResultTemp: null,
        switchHitterResultTemp: null,
        bullyBullyResultTemp: null,
        treblesForShowResultTemp: null,
      })
      .upgrade(async (t) => {
        const copyToOrigin = async (name: string) => {
          const data = await t.table(`${name}Temp`).toArray();
          await t.table(name).bulkAdd(data);
        };
        await Promise.all([
          copyToOrigin('cricketMarkUpResult'),
          copyToOrigin('eaglesEyeResult'),
          copyToOrigin('doubleTroubleResult'),
          copyToOrigin('sweet16Result'),
          copyToOrigin('topsAndTensResult'),
          copyToOrigin('twoDartCombinationsResult'),
          copyToOrigin('aroundTheCompassResult'),
          copyToOrigin('tonsUpResult'),
          copyToOrigin('route64Result'),
          copyToOrigin('eightyThrewResult'),
          copyToOrigin('shanghaiNightsResult'),
          copyToOrigin('switchHitterResult'),
          copyToOrigin('bullyBullyResult'),
          copyToOrigin('treblesForShowResult'),
        ]);
      });
    this.version(3.0).stores({
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
      arrangeResult: 'uuid',
    });
  }
}

export const db = new GameResultDexie();
