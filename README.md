# String Calculator

A simple **String Calculator** implementation in Node.js using TDD (Test Driven Development). This calculator can handle numbers separated by commas or new lines, supports custom delimiters, and includes error handling for negative numbers.

## Features
- Adds numbers in a string separated by commas (`,`).
- Supports newline (`\n`) as a delimiter.
- Supports custom delimiters, provided at the beginning of the string.
- Throws an error when negative numbers are passed.
- Ignores numbers larger than 1000.
- Supports multiple delimiters with varying lengths.

## Getting Started

### Setup

1. Clone the repository or copy the project files.

   ```bash
   git clone <repository-url>
   cd string-calculator


## Run the Tests
#This project uses Mocha and Chai for testing.

To run the tests: **npx mocha** 

This will run all the test cases defined for the StringCalculator class in the test/stringCalculator.test.js file.
## Test Output

StringCalculator
    ✔ should return 0 for an empty string
    ✔ should return the number when a single number is provided
    ✔ should return the sum of two comma-separated numbers
    ✔ should return the sum of an unknown amount of numbers
    ✔ should handle newlines as delimiters
    ✔ should support custom delimiters
    ✔ should throw an exception for negative numbers
    ✔ should throw an exception listing all negative numbers
    ✔ should ignore numbers larger than 1000
    ✔ should support delimiters of any length
    ✔ should support multiple delimiters


  11 passing (12ms)

  ## Running the Calculator

  To run the index.js file: **node index.js**

  ## Example Output

    Input: "" => Output: 0
    Input: "1" => Output: 1
    Input: "1,2" => Output: 3
    Input: "1,2,3,4" => Output: 10
    Input: "1\n2,3" => Output: 6
    Input: "//;\n1;2" => Output: 3
    Input: "1,-2,3" => Error: Negatives not allowed: -2
    Input: "1,-2,-3,4" => Error: Negatives not allowed: -2, -3
    Input: "2,1001" => Output: 2
    Input: "//[***]\n1***2***3" => Output: 6
    Input: "//[*][%]\n1*2%3" => Output: 6