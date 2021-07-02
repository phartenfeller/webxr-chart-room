import getNextHighest5 from './getNextHighest5';

test('35 expect 40', () => {
  expect(getNextHighest5(35)).toBe(40);
});

test('42 expect 45', () => {
  expect(getNextHighest5(42)).toBe(45);
});

test('-20 expect -15', () => {
  expect(getNextHighest5(-20)).toBe(-15);
});

test('14.99999 expect 15', () => {
  expect(getNextHighest5(14.99999)).toBe(15);
});
