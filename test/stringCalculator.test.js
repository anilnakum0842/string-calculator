import { expect } from 'chai';
import StringCalculator from '../stringCalculator.js';


describe('StringCalculator', () => {
  let calculator;

  // Initialize a new StringCalculator instance before each test
  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).to.equal(0);
  });

  it('should return the number when a single number is provided', () => {
    expect(calculator.add('1')).to.equal(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(calculator.add('1,2')).to.equal(3);
  });

  it('should return the sum of an unknown amount of numbers', () => {
    expect(calculator.add('1,2,3,4,5')).to.equal(15);
  });

  it('should handle newlines as delimiters', () => {
    expect(calculator.add('1\n2,3')).to.equal(6);
  });

  it('should support custom delimiters', () => {
    expect(calculator.add('//;\n1;2')).to.equal(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3')).to.throw('Negatives not allowed: -2');
  });
  
  it('should throw an exception listing all negative numbers', () => {
    expect(() => calculator.add('1,-2,-3,4')).to.throw('Negatives not allowed: -2, -3');
  });
  
});
