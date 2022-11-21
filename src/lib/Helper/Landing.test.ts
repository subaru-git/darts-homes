import { getLandingPosition } from './Landing';

test('getLandingPosition', () => {
  const aim = { x: 0, y: 0 };
  const rect = { x: 0, y: 0, width: 540, height: 540 };
  const landing = getLandingPosition(aim, rect, 60);
  expect(landing.x).toBeGreaterThanOrEqual(0);
  expect(landing.y).toBeGreaterThanOrEqual(0);
});
