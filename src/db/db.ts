import Dexie, { Table } from 'dexie'

export interface GameResultModel {
  id?: number
  game: string
  setting: CricketMarkUpSettingModel
  result: CricketMarkUpResultModel
  scores: CricketMarkUpScoreModel[]
  playedAt: string
}

export interface CricketMarkUpSettingModel {
  targetCount: number
}

export interface CricketMarkUpResultModel {
  count: number
}

export interface CricketMarkUpScoreModel {
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
