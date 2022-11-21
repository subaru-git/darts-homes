import gaussian from 'gaussian';

export const getLandingPosition = (
  aim: { x: number; y: number },
  rect: { x: number; y: number; width: number; height: number },
  range: number,
) => {
  if (range === 0) range = 0.001;
  const rx = (range * rect.width) / 394;
  const ry = (range * rect.height) / 394;
  const ax = ((aim.x - rect.x) * rect.width) / 394;
  const ay = ((aim.y - rect.y) * rect.height) / 394;
  const gx = gaussian(ax / 10, rx / 10).ppf(Math.random()) * 10;
  const gy = gaussian(ay / 10, ry / 10).ppf(Math.random()) * 10;
  const x = (gx * 394) / rect.width + rect.x;
  const y = (gy * 394) / rect.height + rect.y;

  return { x: x < 0 ? 0 : x, y: y < 0 ? 0 : y };
};
