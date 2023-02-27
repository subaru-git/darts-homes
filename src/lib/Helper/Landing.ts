import gaussian from 'gaussian';

/**
 * Get landing position
 * The 390 is the size of the viewport of the dart board svg.
 * The rect expected to be returned getBoundingClientRect().
 * That means the maximum position of the landing needs to be subtracted by 1.
 */
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
  const cx = (gx * 390) / rect.width + rect.x;
  const cy = (gy * 390) / rect.height + rect.y;
  const x = cx < rect.x ? rect.x : cx > rect.x + rect.width ? rect.x + rect.width - 1 : cx;
  const y = cy < rect.y ? rect.y : cy > rect.y + rect.height ? rect.y + rect.height - 1 : cy;

  return { x, y };
};
