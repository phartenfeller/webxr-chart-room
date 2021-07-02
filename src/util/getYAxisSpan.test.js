import getYAxisSpan from './getYAxisSpan';

test('Zero bound', () => {
  expect(getYAxisSpan([32, 43, 92])).toEqual([0, 95]);
});

test('Zero bound floating points', () => {
  expect(getYAxisSpan([32.002, 43.21, 92.0003])).toEqual([0, 95]);
});

test('Not Zero bound', () => {
  expect(getYAxisSpan([32, 43, 92], false)).toEqual([32, 95]);
});
