import checkNumber from './checkNumber';

test('1 right parameter', () => {
  try {
    checkNumber({ val: 15, name: 'test' });
    expect(1).toBe(1);
  } catch (e) {
    expect(true).toBe(false);
  }
});

test('multiple right parameter', () => {
  try {
    checkNumber(
      { val: 15, name: 'test' },
      { val: 32, name: 'test2' },
      { val: 12451.21, name: 'test4' },
      { val: -300, name: 'test3' }
    );
    expect(1).toBe(1);
  } catch (e) {
    expect(true).toBe(false);
  }
});

test('1 wrong Parameter', () => {
  try {
    checkNumber({ val: '15', name: 'test' });
    // Fail test if above expression doesn't throw anything.
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe('test is not a number!');
  }
});

test('throw first wrong Parameter', () => {
  try {
    checkNumber(
      { val: 15, name: 'test' },
      { val: {}, name: 'test2' },
      { val: 12451.21, name: 'test4' },
      { val: [], name: 'test3' }
    );
    // Fail test if above expression doesn't throw anything.
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe('test2 is not a number!');
  }
});
