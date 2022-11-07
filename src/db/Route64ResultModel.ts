import { ResultModel } from './ResultModel';

export interface Route64ResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
