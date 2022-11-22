import gaussian from 'gaussian';

export const getLandingPosition = (
  aim: { x: number; y: number },
  rect: { x: number; y: number; width: number; height: number },
  range: number,
) => {
  if (range === 0) return aim;
  const rx = (range * rect.width) / 390;
  const ry = (range * rect.height) / 390;
  const ax = ((aim.x - rect.x) * rect.width) / 390;
  const ay = ((aim.y - rect.y) * rect.height) / 390;
  const gx = gaussian(ax / 10, rx / 20).ppf(Math.random()) * 10;
  const gy = gaussian(ay / 10, ry / 20).ppf(Math.random()) * 10;
  const x = (gx * 390) / rect.width + rect.x;
  const y = (gy * 390) / rect.height + rect.y;

  return { x: x < 0 ? 0 : x, y: y < 0 ? 0 : y };
};
