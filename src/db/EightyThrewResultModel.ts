import { ResultModel } from './ResultModel';

export interface EightyThrewResultModel extends ResultModel {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}
