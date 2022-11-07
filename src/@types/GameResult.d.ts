interface GameResult {
  cricketmarkup: CricketMarkUpResult[];
  eagleseye: EaglesEyeResult[];
  doubletrouble: DoubleTroubleResult[];
  sweet16: Sweet16Result[];
  topsandtens: TopsAndTensResult[];
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
  playedAt: string;
}

interface TopsAndTensResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface AroundTheCompassResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface TonsUpResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface Route64Result {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface EightyThrewResult {
  result: number;
  scores: point[][];
  playedAt: string;
}
