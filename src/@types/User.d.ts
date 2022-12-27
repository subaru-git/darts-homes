interface FirebaseUser {
  id: string;
  name: string;
  photoURL: string;
  email: string;
  history: GameResultModelFirebase;
  createdAt: number;
}

interface User {
  id: string;
  name: string;
  photoURL: string;
  email: string;
  history: GameResultModel;
  createdAt: number;
}

interface FirebaseScore {
  round: number;
  score: point[];
}

// prettier-ignore
interface GameResultModelFirebase {
  cricketMarkUp?: CricketMarkUpResultModel[];
  eaglesEye?: (Omit<EaglesEyeResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  doubleTrouble?: (Omit<DoubleTroubleResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  sweet16?: (Omit<Sweet16ResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  topsAndTens?: (Omit<TopsAndTensResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  twoDartCombinations?: (Omit<TwoDartCombinationsResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  aroundTheCompass?: (Omit<AroundTheCompassResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  tonsUp?: (Omit<TonsUpResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  route64?: (Omit<Route64ResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  eightyThrew?: (Omit<EightyThrewResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  shanghaiNights?: (Omit<ShanghaiNightsResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  switchHitter?: (Omit<SwitchHitterResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  bullyBully?: (Omit<BullyBullyResultModel, 'scores'> & { scores: FirebaseScore[] })[];
  treblesForShow?: (Omit<TreblesForShowResultModel, 'scores'> & { scores: FirebaseScore[] })[];
}
