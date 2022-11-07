import { ResultModel } from './ResultModel';

export interface ShanghaiNightsResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
