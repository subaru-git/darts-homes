import { convertScoreToNumber } from './Converter';

export const isDoubleOut = (target: number, score: point, separate: boolean) => {
  if (score === 'D-BULL') return target === 50;
  if (score.includes('D')) return target - convertScoreToNumber(score, separate) === 0;
  return false;
};

export const isSingleOut = (target: number, score: point, separate: boolean) => {
  const point = convertScoreToNumber(score, separate);
  return target - point === 0;
};

export const isMasterOut = (target: number, score: point, separate: boolean) => {
  if (score === 'D-BULL') return target === 50;
  if (score === 'S-BULL') return !separate && target === 50;
  if (score.includes('D') || score.includes('T'))
    return target - convertScoreToNumber(score, separate) === 0;
  return false;
};

export const isBust = (target: number, out: OutOption) => {
  const bust = out === 'master' ? 1 : out === 'double' ? 1 : 0;
  if (target <= bust) return true;
  return false;
};
