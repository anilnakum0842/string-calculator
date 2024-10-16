import StringCalculator from './stringCalculator.js';

// Create an instance of StringCalculator
const calculator = new StringCalculator();

// Test cases
const testCases = [
  '',        // should return 0
  '1',       // should return 1
  '1,2',     // should return 3
  '1,2,3,4', // should return 10
  '1\n2,3',  // should return 6
  '//;\n1;2', // should return 3
  '1,-2,3',    // should throw error: "Negatives not allowed: -2"
  '1,-2,-3,4'  // should throw error: "Negatives not allowed: -2, -3"
];

// Function to escape newlines for proper display
function escapeNewlines(input) {
    return input.replace(/\n/g, '\\n');
  }

// Run the test cases
testCases.forEach((test) => {
  try {
    const result = calculator.add(test);
    console.log(`Input: "${escapeNewlines(test)}" => Output: ${result}`);
  } catch (error) {
    console.log(`Input: "${escapeNewlines(test)}" => Error: ${error.message}`);
  }
});
