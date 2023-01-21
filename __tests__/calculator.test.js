const calculator = require('../src/calculator');

describe('calculator', () => {
  test('add function should add two numbers', () => {
      const a = 5;
      const b = 3;
      const expected = 8;
      const result = calculator.add(a, b);
      expect(result).toBe(expected);
  });
  
  test('add function should add negative numbers', () => {
      const a = -5;
      const b = -3;
      const expected = -8;
      const result = calculator.add(a, b);
      expect(result).toBe(expected);
  });
  
  test('add function should add decimal numbers', () => {
      const a = 5.5;
      const b = 3.2;
      const expected = 8.7;
      const result = calculator.add(a, b);
      expect(result).toBeCloseTo(expected,1);
  });
  
  test('subtract function should subtract two numbers', () => {
      const a = 5;
      const b = 3;
      const expected = 2;
      const result = calculator.subtract(a, b);
      expect(result).toBe(expected);
  });
  
  test('subtract function should subtract negative numbers', () => {
      const a = -5;
      const b = -3;
      const expected = -2;
      const result = calculator.subtract(a, b);
      expect(result).toBe(expected);
  });
  
  test('subtract function should subtract decimal numbers', () => {
      const a = 5.5;
      const b = 3.2;
      const expected = 2.3;
      const result = calculator.subtract(a, b);
      expect(result).toBeCloseTo(expected,1);
  });
  
  test('multiply function should multiply two numbers', () => {
      const a = 5;
      const b = 3;
      const expected = 15;
      const result = calculator.multiply(a, b);
      expect(result).toBe(expected);
  });
  
  test('multiply function should multiply negative numbers', () => {
      const a = -5;
      const b = -3;
      const expected = 15;
      const result = calculator.multiply(a, b);
      expect(result).toBe(expected);
  });
});