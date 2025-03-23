/**
 * Generates and prints the Fibonacci sequence up to the 50th number.
 * 
 * The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
 * starting from 0 and 1. This function iteratively calculates and prints the sequence.
 * 
 * @returns {void} This function does not return a value; it prints the sequence to the console.
 * 
 * @example
 * fibonacci();
 * // Output:
 * // 0
 * // 1
 * // 1
 * // 2
 * // 3
 * // 5
 * // ...
 * // 12586269025
 */
function fibonacci(): void {
    let n: number = 0, d: number = 1;
    for (let i = 0; i <= 50; i++) {
        console.log(n); // Print the current Fibonacci number
        const fib = n + d; // Calculate the next Fibonacci number
        n = d; // Update n to the next number
        d = fib; // Update d to the next number
    }
}

fibonacci();

