interface GameResult {
  cricketmarkup: CricketMarkUpResult[];
  eagleseye: EaglesEyeResult[];
  doubletrouble: DoubleTroubleResult[];
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
