import { ResultModel } from './ResultModel';

export interface TonsUpResultModel extends ResultModel {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}
