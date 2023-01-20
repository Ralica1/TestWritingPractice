const reverseString = require('../src/reverseString');

test('reverseString function should reverse a string', () => {
    const input = "hello";
    const expected = "olleh";
    const result = reverseString(input);
    expect(result).toBe(expected);
});