const capitalize = require('../src/capitalize');

test('capitalize function should capitalize the first letter of a string', () => {
    const input = "hello";
    const expected = "Hello";
    const result = capitalize(input);
    expect(result).toBe(expected);
});