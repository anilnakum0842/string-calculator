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
});
