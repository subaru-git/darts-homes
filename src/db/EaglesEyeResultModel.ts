import { ResultModel } from './ResultModel';

export interface EaglesEyeResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
