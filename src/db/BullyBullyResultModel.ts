import { ResultModel } from './ResultModel';

export interface BullyBullyResultModel extends ResultModel {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}
