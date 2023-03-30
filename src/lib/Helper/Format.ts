export const DateFormat = (date: string) => {
  return new Date(date).toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const ArrangeScore = (score: point[][]) => {
  return score.map((s, i) => {
    if (i === score.length - 1) return [...s.filter((v) => v !== '0'), 'FINISH'];
    if (s.includes('0')) return [...s.filter((v) => v !== '0'), 'BUST'];
    return s;
  });
};

export const toArrangeScoreBoard = (out: ArrangeOut[], isFinished: boolean): string[][] => {
  if (out.length === 0) return [];
  let targetOut = out;
  if (out[out.length - 1].score.length === 0) targetOut = out.slice(0, -1);
  if (targetOut.length === 0) return [];
  return targetOut
    .map((t, outIndex) => {
      return t.score.map((r, i) => {
        const target = i === 0 ? t.target.toString() : '';
        if (outIndex === targetOut.length - 1 && i === t.score.length - 1 && !isFinished)
          return null;
        if (i === t.score.length - 1)
          return [target, ...r.map((v) => (v === '0' ? '' : v)), 'FINISH'];
        if (r.includes('0')) return [target, ...r.map((v) => (v === '0' ? '' : v)), 'BUST'];
        return [target, ...r, ''];
      });
    })
    .flat()
    .filter((v) => v !== null) as string[][];
};
