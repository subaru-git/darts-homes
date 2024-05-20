import { impossibleDoubleOut, impossibleMasterOut, impossibleSingleOut } from './Arrange';

test('single out', () => {
  expect(impossibleSingleOut.length).toBe(9);
});

test('double out', () => {
  expect(impossibleDoubleOut.length).toBe(7);
});

test('master out', () => {
  expect(impossibleMasterOut.length).toBe(9);
});
