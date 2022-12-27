import { doubleOut, masterOut, singleOut } from './Arrange';

test('single out', () => {
  expect(singleOut.length).toBe(171);
  expect(singleOut[0]).toBe(1);
  expect(singleOut[170]).toBe(180);
});

test('double out', () => {
  expect(doubleOut.length).toBe(162);
  expect(doubleOut[0]).toBe(2);
  expect(doubleOut[161]).toBe(170);
});

test('master out', () => {
  expect(masterOut.length).toBe(170);
  expect(masterOut[0]).toBe(2);
  expect(masterOut[169]).toBe(180);
});
