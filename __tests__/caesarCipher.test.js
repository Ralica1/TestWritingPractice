const caesarCipher = require('../src/caesarCipher');

describe('caesarCipher', () => {
    test('function should shift letters in a string', () => {
        const string = 'abc';
        const shift = 2;
        const expected = 'cde';
        const result = caesarCipher(string, shift);
        expect(result).toBe(expected);
    });
    
    test('function should wrap from z to a', () => {
        const string = 'xyz';
        const shift = 2;
        const expected = 'zab';
        const result = caesarCipher(string, shift);
        expect(result).toBe(expected);
    });
    
    test('function should keep the same case', () => {
        const string = 'HeLlO';
        const shift = 2;
        const expected = 'JgNnQ';
        const result = caesarCipher(string, shift);
        expect(result).toBe(expected);
    });
    
    test('function should handle punctuation', () => {
        const string = 'Hello, World!';
        const shift = 2;
        const expected = 'Jgnnq, Yqtnf!';
        const result = caesarCipher(string, shift);
        expect(result).toBe(expected);
    });
});



