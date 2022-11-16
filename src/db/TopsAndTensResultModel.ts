import { ResultModel } from './ResultModel';

export interface TopsAndTensResultModel extends ResultModel {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}
