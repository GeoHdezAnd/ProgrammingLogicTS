/**
 * Checks if a given number is a prime number.
 *
 * A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself. This function uses an optimized approach to check for
 * primality by:
 * - Skipping even numbers after checking for divisibility by 2.
 * - Checking divisors only up to the square root of the number.
 *
 * @param {number} n - The number to check for primality.
 * @returns {boolean} - `true` if the number is prime, `false` otherwise.
 *
 * @example
 * isPrime(2);   // Returns: true
 * isPrime(29);  // Returns: true
 * isPrime(30);  // Returns: false
 * isPrime(1);   // Returns: false
 */
function isPrime(n: number): boolean {
    if (n <= 1) return false; // Numbers less than or equal to 1 aren't prime
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // Other even numbers are not prime

    // Check divisors from 3 up to the square root of n
    // We only check divisors up to the square root of n (√n).
    /* 
    For n = 36, √n = 6.
    If we check up to 6, we'll find 36 % 2 = 0 and 36 % 3 = 0.
    There's no need to check 9 or 12 because they would have already been caught by their smaller counterparts (4 and 3).
    INCREMENT 
    We skip even numbers by incrementing i by 2 (i.e., only check odd numbers: 3, 5, 7, ...).
 */
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Checks and prints all prime numbers from 0 to 100.
 *
 * This function iterates through numbers from 0 to 100 and uses the `isPrime`
 * function to determine if each number is prime. If a number is prime, it is
 * printed to the console.
 *
 * @returns {void} - This function does not return a value; it prints prime numbers to the console.
 *
 * @example
 * checkPrime();
 * // Output:
 * // 2
 * // 3
 * // 5
 * // ...
 * // 97
 */
function checkPrime(): void {
    for (let i = 0; i <= 100; ++i) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Execute the function
checkPrime();
