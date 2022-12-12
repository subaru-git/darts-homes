interface ResultModel {
  id?: number;
  uuid: string;
}

interface CricketMarkUpResultModel extends ResultModel, CricketMarkUpResult {}
interface EaglesEyeResultModel extends ResultModel, EaglesEyeResult {}
interface DoubleTroubleResultModel extends ResultModel, DoubleTroubleResult {}
interface Sweet16ResultModel extends ResultModel, Sweet16Result {}
interface TopsAndTensResultModel extends ResultModel, TopsAndTensResult {}
interface TwoDartCombinationsResultModel extends ResultModel, TwoDartCombinationsResult {}
interface AroundTheCompassResultModel extends ResultModel, AroundTheCompassResult {}
interface TonsUpResultModel extends ResultModel, TonsUpResult {}
interface Route64ResultModel extends ResultModel, Route64Result {}
interface EightyThrewResultModel extends ResultModel, EightyThrewResult {}
interface ShanghaiNightsResultModel extends ResultModel, ShanghaiNightsResult {}
interface SwitchHitterResultModel extends ResultModel, SwitchHitterResult {}
interface BullyBullyResultModel extends ResultModel, BullyBullyResult {}
interface TreblesForShowResultModel extends ResultModel, TreblesForShowResult {}

interface GameResultModel {
  cricketMarkUp?: CricketMarkUpResultModel[];
  eaglesEye?: EaglesEyeResultModel[];
  doubleTrouble?: DoubleTroubleResultModel[];
  sweet16?: Sweet16ResultModel[];
  topsAndTens?: TopsAndTensResultModel[];
  twoDartCombinations?: TwoDartCombinationsResultModel[];
  aroundTheCompass?: AroundTheCompassResultModel[];
  tonsUp?: TonsUpResultModel[];
  route64?: Route64ResultModel[];
  eightyThrew?: EightyThrewResultModel[];
  shanghaiNights?: ShanghaiNightsResultModel[];
  switchHitter?: SwitchHitterResultModel[];
  bullyBully?: BullyBullyResultModel[];
  treblesForShow?: TreblesForShowResultModel[];
}
