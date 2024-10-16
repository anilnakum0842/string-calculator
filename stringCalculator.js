class StringCalculator {
    // Method to add numbers from a string input
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = /,|\n/; // Default delimiters: comma or newline

        // if (numbers.startsWith('//')) {
        //     const parts = numbers.split('\n');
        //     delimiter = new RegExp(parts[0].match(/\[(.*?)\]/)[1], 'g'); // Extract custom delimiter
        //     numbers = parts[1];
        //   }

        // Check for custom delimiters
    if (numbers.startsWith("//")) {
        const multiDelimiterMatch = numbers.match(/^\/\/(\[.*\])\n/);
        if (multiDelimiterMatch) {
            // Handle multiple or long custom delimiters like //[delim1][delim2]
            const customDelimiters = multiDelimiterMatch[1]
                .split('][')                  // Split delimiters by ']['
                .map(d => d.replace(/[\[\]]/g, '')) // Remove brackets from each delimiter
                .map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special regex chars
  
            // Create a dynamic regex for delimiters
            delimiter = new RegExp(customDelimiters.join('|'));
            numbers = numbers.slice(multiDelimiterMatch[0].length);
        } else {  
            // Handle single-character delimiter like //;\n
            const singleDelimiterMatch = numbers.match(/^\/\/(.)\n/);
            if (singleDelimiterMatch) {
                delimiter = new RegExp(singleDelimiterMatch[1]);
                numbers = numbers.slice(singleDelimiterMatch[0].length);
            }
        }
    }

        // Split string using the delimiter and remove empty entries
        const numArray = numbers.split(delimiter).map(num => parseInt(num)).filter(num => num <= 1000);

        const negatives = numArray.filter(n => n < 0);

    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

        // Convert to numbers
        const numValues = numArray.map(num => {
            const parsed = Number(num);
            if (isNaN(parsed)) {
                throw new Error(`Invalid number found: ${num}`);
            }
            return parsed;
        });

        // Sum valid numbers and return result
        return numValues.reduce((sum, num) => sum + num, 0);
    }
}


export default StringCalculator;
