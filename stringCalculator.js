class StringCalculator {
    // Method to add numbers from a string input
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = /,|\n/; // Default delimiters: comma or newline

        // Split string using the delimiter and remove empty entries
        const numArray = numbers.split(delimiter).filter(num => num.trim() !== "");

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
