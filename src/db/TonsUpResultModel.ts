import { ResultModel } from './ResultModel';

export interface TonsUpResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
