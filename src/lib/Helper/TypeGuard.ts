const isGameHistory = (instance: any) => {
  if (!instance) return false;
  if (typeof instance !== 'object') return false;
  if (instance.cricketmarkup) {
    for (const i of instance.cricketmarkup) {
      if (!isCricketMarkUpResult(i)) return false;
    }
  }
  if (instance.eagleseye) {
    for (const i of instance.eagleseye) {
      if (!isEaglesEyeResult(i)) return false;
    }
  }
  if (instance.doubletrouble) {
    for (const i of instance.doubletrouble) {
      if (!isDoubleTroubleResult(i)) return false;
    }
  }
  if (instance.sweet16) {
    for (const i of instance.sweet16) {
      if (!isSweet16Result(i)) return false;
    }
  }
  if (instance.topsandtens) {
    for (const i of instance.topsandtens) {
      if (!isTopsAndTensResult(i)) return false;
    }
  }
  if (instance.aroundthecompass) {
    for (const i of instance.aroundthecompass) {
      if (!isAroundTheCompassResult(i)) return false;
    }
  }
  if (instance.tonsup) {
    for (const i of instance.tonsup) {
      if (!isTonsUpResult(i)) return false;
    }
  }
  if (instance.route64) {
    for (const i of instance.route64) {
      if (!isRoute64Result(i)) return false;
    }
  }
  if (instance.eightythrew) {
    for (const i of instance.eightythrew) {
      if (!isEightyThrewResult(i)) return false;
    }
  }
  if (instance.shanghainight) {
    for (const i of instance.shanghainight) {
      if (!isShanghaiNightResult(i)) return false;
    }
  }
  if (instance.switchhitter) {
    for (const i of instance.switchhitter) {
      if (!isSwitchHitterResult(i)) return false;
    }
  }
  if (instance.bullybully) {
    for (const i of instance.bullybully) {
      if (!isBullyBullyResult(i)) return false;
    }
  }
  if (instance.trebleforshow) {
    for (const i of instance.trebleforshow) {
      if (!isTrebleForShowResult(i)) return false;
    }
  }
  return true;
};

const isCricketMarkUpResult = (i: any) => {
  if (typeof i.targetCount !== 'number') return false;
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    if (typeof s.number !== 'number') return false;
    if (typeof s.count !== 'number') return false;
    if (typeof s.total !== 'number') return false;
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isEaglesEyeResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isDoubleTroubleResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isSweet16Result = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isTopsAndTensResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isAroundTheCompassResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isTonsUpResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isRoute64Result = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isEightyThrewResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isShanghaiNightResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isSwitchHitterResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isBullyBullyResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.round !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};

const isTrebleForShowResult = (i: any) => {
  if (typeof i.result !== 'number') return false;
  if (typeof i.scores !== 'object') return false;
  for (const s of i.scores) {
    if (typeof s !== 'object') return false;
    for (const p of s) {
      if (typeof p !== 'string') return false;
    }
  }
  if (typeof i.playedAt !== 'string') return false;
  return true;
};
export {
  isGameHistory,
  isCricketMarkUpResult,
  isEaglesEyeResult,
  isDoubleTroubleResult,
  isSweet16Result,
  isTopsAndTensResult,
  isAroundTheCompassResult,
  isTonsUpResult,
  isRoute64Result,
  isEightyThrewResult,
  isShanghaiNightResult,
  isSwitchHitterResult,
  isBullyBullyResult,
  isTrebleForShowResult,
};
