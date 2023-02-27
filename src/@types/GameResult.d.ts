interface GameResult {
  cricketMarkUp?: CricketMarkUpResult[];
  eaglesEye?: EaglesEyeResult[];
  doubleTrouble?: DoubleTroubleResult[];
  sweet16?: Sweet16Result[];
  topsAndTens?: TopsAndTensResult[];
  twoDartCombinations?: TwoDartCombinationsResult[];
  aroundTheCompass?: AroundTheCompassResult[];
  tonsUp?: TonsUpResult[];
  route64?: Route64Result[];
  eightyThrew?: EightyThrewResult[];
  shanghaiNights?: ShanghaiNightsResult[];
  switchHitter?: SwitchHitterResult[];
  bullyBully?: BullyBullyResult[];
  treblesForShow?: TreblesForShowResult[];
  countUp?: CountUpResult[];
}

interface CricketMarkUpResult {
  targetCount: number;
  result: number;
  scores: CricketMarkUpScore[];
  playedAt: string;
}

interface CricketMarkUpScore {
  number: number;
  count: number;
  total: number;
}

interface EaglesEyeResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface DoubleTroubleResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface Sweet16Result {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface TopsAndTensResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface TwoDartCombinationsResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface AroundTheCompassResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface TonsUpResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface Route64Result {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface EightyThrewResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface ShanghaiNightsResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface SwitchHitterResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface BullyBullyResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface TreblesForShowResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface ArrangeResult {
  result: ArrangeOut[];
  settings: ArrangeSettings;
  playedAt: string;
}

interface ArrangeOut {
  target: number;
  score: point[][];
}

interface CountUpResult {
  result: number;
  scores: number[];
  playedAt: string;
}
