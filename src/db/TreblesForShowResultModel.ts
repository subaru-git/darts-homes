import { ResultModel } from './ResultModel';

export interface TreblesForShowResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
