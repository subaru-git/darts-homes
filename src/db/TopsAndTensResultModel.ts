import { ResultModel } from './ResultModel';

export interface TopsAndTensResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
