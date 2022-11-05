const isGameHistory = (instance: any) => {
  if (!instance) return false;
  if (typeof instance !== 'object') return false;
  if (instance.cricketmarkup) {
    for (const i of instance.cricketmarkup) {
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
    }
  }
  if (instance.eagleseye) {
    for (const i of instance.eagleseye) {
      if (typeof i.result !== 'number') return false;
      if (typeof i.scores !== 'object') return false;
      for (const s of i.scores) {
        if (typeof s !== 'object') return false;
        for (const p of s) {
          if (typeof p !== 'string') return false;
        }
      }
      if (typeof i.playedAt !== 'string') return false;
    }
  }
  if (instance.doubletrouble) {
    for (const i of instance.doubletrouble) {
      if (typeof i.result !== 'number') return false;
      if (typeof i.scores !== 'object') return false;
      for (const s of i.scores) {
        if (typeof s !== 'object') return false;
        for (const p of s) {
          if (typeof p !== 'string') return false;
        }
      }
      if (typeof i.playedAt !== 'string') return false;
    }
  }
  if (instance.sweet16) {
    for (const i of instance.sweet16) {
      if (typeof i.result !== 'number') return false;
      if (typeof i.scores !== 'object') return false;
      for (const s of i.scores) {
        if (typeof s !== 'object') return false;
        for (const p of s) {
          if (typeof p !== 'string') return false;
        }
      }
      if (typeof i.playedAt !== 'string') return false;
    }
  }
  return true;
};

export { isGameHistory };
