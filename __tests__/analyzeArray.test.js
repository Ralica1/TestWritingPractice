const analyzeArray = require('../src/analyzeArray');

describe('analyzeArray', () => {
    test('function should return object with average, min, max, and length of array', () => {
        const array = [1, 8, 3, 4, 2, 6];
        const expected = { average: 4, min: 1, max: 8, length: 6 };
        const result = analyzeArray(array);
        expect(result).toEqual(expected);
    });
    
    test('function should handle empty array', () => {
        const array = [];
        const expected = { average: 0, min: null, max: null, length: 0 };
        const result = analyzeArray(array);
        expect(result).toEqual(expected);
    });
    
    test('function should handle array of length 1', () => {
        const array = [5];
        const expected = { average: 5, min: 5, max: 5, length: 1 };
        const result = analyzeArray(array);
        expect(result).toEqual(expected);
    });
});
