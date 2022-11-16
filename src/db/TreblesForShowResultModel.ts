import { ResultModel } from './ResultModel';

export interface TreblesForShowResultModel extends ResultModel {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}
