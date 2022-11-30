interface Game {
  addScore: (score: point) => void;
  removeScore: () => void;
  getRoundScore: () => point[];
  getScore: () => point[][];
  roundChange: () => void;
  isFinished: () => boolean;
}

interface GameData<T, U> {
  resumeGame: (progress: T) => void;
  getGameProgress: () => T;
  getGameResult: () => U;
}
