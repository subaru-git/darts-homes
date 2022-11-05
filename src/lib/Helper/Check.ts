const isDoubleOut = (target: number, score: point) => {
  if (score === 'D-BULL') return target === 50;
  if (score.includes('D')) {
    const number = Number(score.split('D')[0]);
    return target - number * 2 === 0;
  }
  return false;
};

export { isDoubleOut };
