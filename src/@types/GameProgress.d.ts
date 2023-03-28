interface CricketMarkUpProgress {
  targetCount: number;
  round: point[];
  score: point[][];
}

interface EaglesEyeProgress {
  round: point[];
  score: point[][];
}

interface DoubleTroubleProgress {
  roundScore: point[];
  score: point[][];
}

interface BullyBullyProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface Sweet16Progress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface TopsAndTensProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface TwoDartCombinationsProgress {
  roundScore: point[];
  score: point[][];
}

interface AroundTheCompassProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface TonsUpProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface Route64Progress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface EightyThrewProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface ShanghaiNightsProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface SwitchHitterProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface TreblesForShowProgress {
  roundScore: point[];
  score: point[][];
  round: number;
}

interface ArrangeProgress {
  roundScore: point[];
  score: point[][];
  vector: Vector2D[];
  targetOutCount: number;
  targets: number[];
  settings: ArrangeSettings;
}

type OutOption = 'double' | 'single' | 'master';
interface RangeAxis {
  x: number;
  y: number;
}

interface ArrangeSettings {
  targets?: number[];
  out: OutOption;
  range: RangeAxis;
  simulation: boolean;
  separate: boolean;
  hard: boolean;
  game: boolean;
  pro: boolean;
}

interface CountUpProgress {
  round: number | null;
  score: number[];
}
