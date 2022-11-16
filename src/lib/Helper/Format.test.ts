import { DateFormat } from './Format';

test('DateFormat', () => {
  expect(DateFormat('2022-11-15T10:17:45.701Z')).toBe('2022/11/15 19:17:45');
});
