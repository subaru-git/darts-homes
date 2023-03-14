export const convertScoreToNumber = (score: point, separate: boolean = false) => {
  if (score === 'S-BULL') return separate ? 25 : 50;
  if (score === 'D-BULL') return 50;
  if (score === 'OUT') return 0;
  if (score.includes('T')) return Number(score.split('T')[1]) * 3;
  if (score.includes('D')) return Number(score.split('D')[1]) * 2;
  return Number(score);
};

export const convertScoreToCount = (score: point) => {
  if (score === 'D-BULL') return 2;
  if (score === 'S-BULL') return 1;
  if (score.includes('T')) return 3;
  if (score.includes('D')) return 2;
  return 1;
};

export const convertCountScoreToNumberOfCount = (score: string[][], begin: number, end: number) => {
  const numbers = [...[...Array(21).keys()].filter((n) => begin <= n && n <= end).reverse(), 25];
  const result: CricketMarkUpScore[] = numbers.map((n) => ({ number: n, count: 0, total: 0 }));
  score.flat().forEach((s) => {
    if (s === '-1') return;
    const [number, count] = s.split('-');
    const target = parseInt(number);
    result.find((r) => r.number === target)!.total += 1;
    if ((target < begin || end < target) && target !== 25) return;
    result.find((r) => r.number === target)!.count += parseInt(count);
  });
  return result;
};

export const convertNumberOfCountToMarkCount = (count: number) => {
  const result: number[] = [];
  let rest = count;
  while (rest > 3) {
    result.push(3);
    rest -= 3;
  }
  result.push(rest);
  return result;
};

export const convertNumberToSinglePoint = (n: number) => {
  if (n === 25) return 'S-BULL';
  if (n > 20) return '0';
  return `${n}`;
};

export const convertPointToTarget = (point: point) => {
  if (point === 'S-BULL' || point === 'D-BULL') return 25;
  if (point === 'OUT') return 0;
  const t = point.includes('T') || point.includes('D') ? point.slice(1) : point;
  return parseInt(t);
};

export const convertGameResultToFirebaseResult = (
  result: GameResultModel,
): GameResultModelFirebase => {
  // prettier-ignore
  return {
    cricketMarkUp: result.cricketMarkUp ?? [],
    eaglesEye: result.eaglesEye?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    doubleTrouble: result.doubleTrouble?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    sweet16: result.sweet16?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    topsAndTens: result.topsAndTens?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    twoDartCombinations: result.twoDartCombinations?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    aroundTheCompass: result.aroundTheCompass?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores)})),
    tonsUp: result.tonsUp?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    route64: result.route64?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    eightyThrew: result.eightyThrew?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    shanghaiNights: result.shanghaiNights?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    switchHitter: result.switchHitter?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    bullyBully: result.bullyBully?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    treblesForShow: result.treblesForShow?.map((e) => ({ ...e, scores: convertPointsToScore(e.scores) })),
    countUp: result.countUp ?? [],
  };
};

export const convertPointsToScore = (points: point[][]): FirebaseScore[] => {
  return points.map((p, i) => ({ round: i, score: p }));
};

export const convertFirebaseResultToGameResult = (
  result: GameResultModelFirebase,
): GameResultModel => {
  // prettier-ignore
  return {
    cricketMarkUp: result.cricketMarkUp,
    eaglesEye: result.eaglesEye?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    doubleTrouble: result.doubleTrouble?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    sweet16: result.sweet16?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    topsAndTens: result.topsAndTens?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    twoDartCombinations: result.twoDartCombinations?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    aroundTheCompass: result.aroundTheCompass?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores)})),
    tonsUp: result.tonsUp?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    route64: result.route64?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    eightyThrew: result.eightyThrew?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    shanghaiNights: result.shanghaiNights?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    switchHitter: result.switchHitter?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    bullyBully: result.bullyBully?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    treblesForShow: result.treblesForShow?.map((e) => ({ ...e, scores: convertScoreToPoints(e.scores) })),
    countUp: result.countUp,
  };
};

export const convertScoreToPoints = (score: FirebaseScore[]): point[][] => {
  return score.sort((a, b) => a.round - b.round).map((s) => s.score);
};

export const convertArrangeOutToGameScore = (data: ArrangeOut): GameScore[] => {
  let current = data.target;
  const scores = data.score.map((s) => {
    const count = s.reduce((p: number, c: point) => p + convertScoreToNumber(c, true), 0);
    const hits = s.map((d) => (d === '0' ? '-' : d));
    let scored = count.toString();
    if (current - count < 0) scored = 'B';
    if (s.every((p) => p === 'OUT')) scored = '-';
    if (current - count === 0) {
      scored = '';
    }
    if (current - count >= 0) current -= count;
    let togo = current.toString();
    if (current === 0) {
      const count = s.filter((p) => p !== '0').length;
      togo = count === 1 ? '①' : count === 2 ? '②' : '③';
    }
    return { Scored: scored, ToGo: togo.toString(), Hits: hits };
  });
  return [{ Scored: '', ToGo: data.target.toString(), Hits: null }, ...scores];
};
