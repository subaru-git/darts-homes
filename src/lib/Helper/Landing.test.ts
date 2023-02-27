import { getLandingPosition } from './Landing';

test('getLandingPosition', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.5);
  const aim = { x: 0, y: 0 };
  const rect = { x: 0, y: 0, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, 60);
  expect(landing.x).toBe(5.534450450253146e-7);
  expect(landing.y).toBe(5.534450450253146e-7);
});

test('getLandingPosition out of rect left top', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.1);
  const aim = { x: 410, y: 410 };
  const rect = { x: 400, y: 400, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, 120);
  expect(landing.x).toBe(400);
  expect(landing.y).toBe(400);
});

test('getLandingPosition out of rect right bottom', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.9);
  const aim = { x: 930, y: 930 };
  const rect = { x: 400, y: 400, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, 120);
  expect(landing.x).toBe(939);
  expect(landing.y).toBe(939);
});
