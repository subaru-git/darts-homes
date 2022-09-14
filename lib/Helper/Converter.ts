export const convertScoreToNumber = (score: string) => {
  if (score.includes("T")) return Number(score.split("T")[0]) * 3;
  if (score.includes("D")) return Number(score.split("D")[0]) * 2;
  return Number(score);
};

export const convertScoreToCount = (score: string) => {
  if (score.includes("T")) return 3;
  if (score.includes("D")) return 2;
  return 1;
};

export const convertCountScoreToNumberOfCount = (
  score: string[][],
  begin: number,
  end: number
) => {
  const numbers = [
    ...[...Array(21).keys()].filter((n) => begin <= n && n <= end).reverse(),
    50,
  ];
  const result: { number: number; count: number }[] = [];
  numbers.forEach((n) => result.push({ number: n, count: 0 }));
  score.flat().forEach((s) => {
    if (s === "0") return;
    const [number, count] = s.split("-");
    const target = parseInt(number);
    if ((target < begin || end < target) && target !== 50) return;
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
