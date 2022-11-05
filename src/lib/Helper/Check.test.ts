import { isDoubleOut } from './Check';

test('isDoubleOut', () => {
  expect(isDoubleOut(40, '20D')).toBe(true);
  expect(isDoubleOut(39, '20D')).toBe(false);
  expect(isDoubleOut(32, '16D')).toBe(true);
  expect(isDoubleOut(16, '16')).toBe(false);
  expect(isDoubleOut(50, 'D-BULL')).toBe(true);
});
