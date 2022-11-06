import { ResultModel } from './ResultModel';

export interface TwoDartCombinationsResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
