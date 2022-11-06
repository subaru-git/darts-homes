---
to: src/db/<%= name %>ResultModel.ts
---
import { ResultModel } from './ResultModel';

export interface <%= name %>ResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
