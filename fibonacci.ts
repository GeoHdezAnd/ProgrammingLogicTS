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
    let n: number = 0,
        d: number = 1;
    for (let i = 0; i <= 50; i++) {
        console.log(n); // Print the current Fibonacci number
        const fib = n + d; // Calculate the next Fibonacci number
        n = d; // Update n to the next number
        d = fib; // Update d to the next number
    }
}

fibonacci();

/**
 * Calculates the nth Fibonacci number RECURSIVE.
 * Note: This is an inefficient implementation for demonstration purposes.
 *
 * @param {number} n - The position in the Fibonacci sequence to calculate
 * @returns {number} The nth Fibonacci number
 *
 * @example
 * fibonacciRecursive(5); // Returns: 5
 * fibonacciRecursive(7); // Returns: 13
 */

function fibonacciRecursive(n: number): number {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5)); // 5
console.log(fibonacciRecursive(7)); // 13

/**
 * Generates the Fibonacci sequence up to the nth term using an iterative approach.
 * 
 * @param {number} n - The number of terms to generate (inclusive)
 * @returns {number[]} An array containing the Fibonacci sequence from 0 to nth term
 * @throws {Error} If n is negative
 * 
 * @example
 * fibonacciIterative(5); // Returns [0, 1, 1, 2, 3, 5]
 * fibonacciIterative(1); // Returns [0, 1]
 * fibonacciIterative(0); // Returns [0]
 */
function fibonacciIterative(n: number): number[] {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    const sequence: number[] = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Test cases
console.log(fibonacciIterative(5).join(", "));  // "0, 1, 1, 2, 3, 5"
console.log(fibonacciIterative(1).join(", "));  // "0, 1"
console.log(fibonacciIterative(0).join(", "));  // "0"