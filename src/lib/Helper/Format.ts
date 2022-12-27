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
