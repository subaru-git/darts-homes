import { ResultModel } from './ResultModel';

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
