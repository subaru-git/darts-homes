import { AroundTheCompassResultModel } from './AroundTheCompassResultModel';
import { BullyBullyResultModel } from './BullyBullyResultModel';
import { CricketMarkUpResultModel } from './CricketMarkUpResultModel';
import { DoubleTroubleResultModel } from './DoubleTroubleResultModel';
import { EaglesEyeResultModel } from './EaglesEyeResultModel';
import { EightyThrewResultModel } from './EightyThrewResultModel';
import { Route64ResultModel } from './Route64ResultModel';
import { ShanghaiNightsResultModel } from './ShanghaiNightsResultModel';
import { Sweet16ResultModel } from './Sweet16ResultModel';
import { SwitchHitterResultModel } from './SwitchHitterResultModel';
import { TonsUpResultModel } from './TonsUpResultModel';
import { TopsAndTensResultModel } from './TopsAndTensResultModel';
import { TreblesForShowResultModel } from './TreblesForShowResultModel';
import { TwoDartCombinationsResultModel } from './TwoDartCombinationsResultModel';

export interface Queries {
  cricketMarkUp: CricketMarkUpResultModel[];
  eaglesEye: EaglesEyeResultModel[];
  doubleTrouble: DoubleTroubleResultModel[];
  sweet16: Sweet16ResultModel[];
  topsAndTens: TopsAndTensResultModel[];
  twoDartCombinations: TwoDartCombinationsResultModel[];
  aroundTheCompass: AroundTheCompassResultModel[];
  tonsUp: TonsUpResultModel[];
  route64: Route64ResultModel[];
  eightyThrew: EightyThrewResultModel[];
  shanghaiNights: ShanghaiNightsResultModel[];
  switchHitter: SwitchHitterResultModel[];
  bullyBully: BullyBullyResultModel[];
  treblesForShow: TreblesForShowResultModel[];
}
