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
  range: RangeAxis,
) => {
  const x = getLandingAxis(aim.x, rect.x, rect.width, range.x);
  const y = getLandingAxis(aim.y, rect.y, rect.height, range.y);
  return { x, y };
};

const getLandingAxis = (aim: number, pos: number, size: number, range: number) => {
  if (range === 0) return aim;
  const r = (range * size) / 390;
  const a = ((aim - pos) * size) / 390;
  const g = gaussian(a / 10, r / 20).ppf(Math.random()) * 10;
  const c = (g * 390) / size + pos;
  return c < pos ? pos : c > pos + size ? pos + size - 1 : c;
};

export const normalizedCoordinate = (pos: Vector2D, rect: RectSize) => {
  const x = normalized(pos.x, rect.width);
  const y = normalized(pos.y, rect.height);
  return { x, y };
};

const normalized = (pos: number, size: number) => pos / size;

export const actualizedCoordinate = (pos: Vector2D, rect: RectSize) => {
  const x = actualized(pos.x, rect.width);
  const y = actualized(pos.y, rect.height);
  return { x, y };
};

const actualized = (pos: number, size: number) => pos * size;
