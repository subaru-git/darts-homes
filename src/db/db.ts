import Dexie, { Table } from 'dexie'

export interface CricketMarkUpResultModel {
  id?: number
  targetCount: number
  result: number
  scores: CricketMarkUpScoreModel[]
  playedAt: string
}

export interface CricketMarkUpScoreModel {
  number: number
  count: number
  total: number
}

export interface EaglesEyeResultModel {
  id?: number
  result: number
  scores: point[][]
  playedAt: string
}

export class GameResultDexie extends Dexie {
  cricketMarkUpResult!: Table<CricketMarkUpResultModel>
  eaglesEyeResult!: Table<EaglesEyeResultModel>

  constructor() {
    super('DartsGames')
    this.version(1).stores({
      cricketMarkUpResult: '++id',
      eaglesEyeResult: '++id',
    })
  }
}

export const db = new GameResultDexie()
