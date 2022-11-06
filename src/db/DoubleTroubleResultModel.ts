import { ResultModel } from './ResultModel';

export interface DoubleTroubleResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
