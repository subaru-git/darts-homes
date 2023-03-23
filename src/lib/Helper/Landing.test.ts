import { actualizedCoordinate, getLandingPosition, normalizedCoordinate } from './Landing';

test('getLandingPosition', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.5);
  const aim = { x: 0, y: 0 };
  const rect = { x: 0, y: 0, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, { x: 60, y: 60 });
  expect(landing.x).toBe(5.534450450253146e-7);
  expect(landing.y).toBe(5.534450450253146e-7);
});

test('getLandingPosition out of rect left top', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.1);
  const aim = { x: 410, y: 410 };
  const rect = { x: 400, y: 400, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, { x: 120, y: 120 });
  expect(landing.x).toBe(400);
  expect(landing.y).toBe(400);
});

test('getLandingPosition out of rect right bottom', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.9);
  const aim = { x: 930, y: 930 };
  const rect = { x: 400, y: 400, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, { x: 120, y: 120 });
  expect(landing.x).toBe(939);
  expect(landing.y).toBe(939);
});

test('normalizedCoordinate', () => {
  expect(normalizedCoordinate({ x: 0, y: 0 }, { width: 540, height: 540 })).toEqual({ x: 0, y: 0 });
  expect(normalizedCoordinate({ x: 270, y: 270 }, { width: 540, height: 540 })).toEqual({
    x: 0.5,
    y: 0.5,
  });
  expect(normalizedCoordinate({ x: 540, y: 540 }, { width: 540, height: 540 })).toEqual({
    x: 1,
    y: 1,
  });
  expect(normalizedCoordinate({ x: -270, y: -270 }, { width: 540, height: 540 })).toEqual({
    x: -0.5,
    y: -0.5,
  });
  expect(normalizedCoordinate({ x: 1080, y: 1080 }, { width: 540, height: 540 })).toEqual({
    x: 2.0,
    y: 2.0,
  });
});

test('actualizedCoordinate', () => {
  expect(actualizedCoordinate({ x: 0, y: 0 }, { width: 540, height: 540 })).toEqual({ x: 0, y: 0 });
  expect(actualizedCoordinate({ x: 0.5, y: 0.5 }, { width: 540, height: 540 })).toEqual({
    x: 270,
    y: 270,
  });
  expect(actualizedCoordinate({ x: 1, y: 1 }, { width: 540, height: 540 })).toEqual({
    x: 540,
    y: 540,
  });
  expect(actualizedCoordinate({ x: -0.5, y: -0.5 }, { width: 540, height: 540 })).toEqual({
    x: -270,
    y: -270,
  });
  expect(actualizedCoordinate({ x: 2, y: 2 }, { width: 540, height: 540 })).toEqual({
    x: 1080,
    y: 1080,
  });
});
