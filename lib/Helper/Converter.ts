export const convertScoreToNumber = (score: point) => {
  if (score === "S-BULL") return 50;
  if (score === "D-BULL") return 50;
  if (score.includes("T")) return Number(score.split("T")[0]) * 3;
  if (score.includes("D")) return Number(score.split("D")[0]) * 2;
  return Number(score);
};

export const convertScoreToCount = (score: string) => {
  if (score === "D-BULL") return 2;
  if (score === "S-BULL") return 1;
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
    25,
  ];
  const result: { number: number; count: number; total: number }[] = [];
  numbers.forEach((n) => result.push({ number: n, count: 0, total: 0 }));
  score.flat().forEach((s) => {
    if (s === "-1") return;
    const [number, count] = s.split("-");
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
  if (n === 25) return "S-BULL";
  if (n > 20) return "0";
  return `${n}`;
};
