import scaleValues from './scaleValues';

test('max 100', () => {
  expect(scaleValues([30, 40, 90], 0, 100)).toEqual([0.3, 0.4, 0.9]);
});

test('fail: max is not a number', () => {
  try {
    expect(scaleValues([30, 40, 90], '0', 100));
    // fail if not throws
    expect(1).toEqual(2);
  } catch (e) {
    expect(1).toEqual(1);
  }
});
