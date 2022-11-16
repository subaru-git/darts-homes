import { ResultModel } from './ResultModel';

export interface ShanghaiNightsResultModel extends ResultModel {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}
