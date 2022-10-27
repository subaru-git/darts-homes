import Dexie, { Table } from 'dexie'

export interface GameResultModel {
  id?: number
  game: string
  setting: CricketNumberCountSettingModel
  result: CricketNumberCountResultModel
  scores: CricketNumberCountScoreModel[]
  playedAt: string
}

export interface CricketNumberCountSettingModel {
  targetCount: number
}

export interface CricketNumberCountResultModel {
  count: number
}

export interface CricketNumberCountScoreModel {
  number: number
  count: number
  total: number
}

export class GameResultDexie extends Dexie {
  gameResult!: Table<GameResultModel>

  constructor() {
    super('gameDatabase')
    this.version(1).stores({
      gameResult: '++id',
    })
  }
}

export const db = new GameResultDexie()
