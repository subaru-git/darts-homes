import { createCheckers } from 'ts-interface-checker';
import types from '@/schemas/Types-ti';

const isGameHistory = (instance: any) => {
  if (!instance) return false;
  if (typeof instance !== 'object') return false;
  const checker = createCheckers(types);
  if (instance.cricketmarkup) {
    for (const i of instance.cricketmarkup) {
      if (!checker.CricketMarkUpResult.test(compKeys(i))) return false;
    }
  }
  if (instance.eagleseye) {
    for (const i of instance.eagleseye) {
      if (!checker.EaglesEyeResult.test(compKeys(i))) return false;
    }
  }
  if (instance.doubletrouble) {
    for (const i of instance.doubletrouble) {
      if (!checker.DoubleTroubleResult.test(compKeys(i))) return false;
    }
  }
  if (instance.sweet16) {
    for (const i of instance.sweet16) {
      if (!checker.Sweet16Result.test(compKeys(i))) return false;
    }
  }
  if (instance.topsandtens) {
    for (const i of instance.topsandtens) {
      if (!checker.TopsAndTensResult.test(compKeys(i))) return false;
    }
  }
  if (instance.twodartcombinations) {
    for (const i of instance.twodartcombinations) {
      if (!checker.TwoDartCombinationsResult.test(compKeys(i))) return false;
    }
  }
  if (instance.aroundthecompass) {
    for (const i of instance.aroundthecompass) {
      if (!checker.AroundTheCompassResult.test(compKeys(i))) return false;
    }
  }
  if (instance.tonsup) {
    for (const i of instance.tonsup) {
      if (!checker.TonsUpResult.test(compKeys(i))) return false;
    }
  }
  if (instance.route64) {
    for (const i of instance.route64) {
      if (!checker.Route64Result.test(compKeys(i))) return false;
    }
  }
  if (instance.eightythrew) {
    for (const i of instance.eightythrew) {
      if (!checker.EightyThrewResult.test(compKeys(i))) return false;
    }
  }
  if (instance.shanghainights) {
    for (const i of instance.shanghainights) {
      if (!checker.ShanghaiNightsResult.test(compKeys(i))) return false;
    }
  }
  if (instance.switchhitter) {
    for (const i of instance.switchhitter) {
      if (!checker.SwitchHitterResult.test(compKeys(i))) return false;
    }
  }
  if (instance.bullybully) {
    for (const i of instance.bullybully) {
      if (!checker.BullyBullyResult.test(compKeys(i))) return false;
    }
  }
  if (instance.treblesforshow) {
    for (const i of instance.treblesforshow) {
      if (!checker.TreblesForShowResult.test(compKeys(i))) return false;
    }
  }
  return true;
};

const compKeys = (instance: any) => {
  if (!instance.round) instance.round = 0;
  return instance;
};

export { isGameHistory };
