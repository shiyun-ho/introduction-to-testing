import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  })

  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  })

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  })

  it('should handle cases where string parameters cannot be parsed into numbers', () => {
    expect(() => add(2, 'potato')).toThrow();
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(4, 2)).toBe(2);
  })

  it('should handle array inputs', () => {
    expect(subtract([10, 2], 5)).toBe(3);
  })
});

describe('multiply', () => {
  it('should multiple two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  })
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(6, 2)).toBe(3);
  })
});
