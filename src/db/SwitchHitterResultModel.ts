import { ResultModel } from './ResultModel';

export interface SwitchHitterResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
