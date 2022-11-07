import { ResultModel } from './ResultModel';

export interface EightyThrewResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
