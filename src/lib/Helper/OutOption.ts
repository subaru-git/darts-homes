import { convertScoreToNumber } from './Converter';

const isDoubleOut = (target: number, score: point, separate: boolean) => {
  if (score === 'D-BULL') return target === 50;
  if (score.includes('D')) return target - convertScoreToNumber(score, separate) === 0;
  return false;
};

const isSingleOut = (target: number, score: point, separate: boolean) => {
  const point = convertScoreToNumber(score, separate);
  return target - point === 0;
};

const isMasterOut = (target: number, score: point, separate: boolean) => {
  if (score === 'D-BULL') return target === 50;
  if (score === 'S-BULL') return !separate && target === 50;
  if (score.includes('D') || score.includes('T'))
    return target - convertScoreToNumber(score, separate) === 0;
  return false;
};

export { isDoubleOut, isSingleOut, isMasterOut };
