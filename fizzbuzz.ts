/**
 * Prints numbers from 1 to 100, replacing multiples of 3 with "fizz",
 * multiples of 5 with "buzz", and multiples of both 3 and 5 with "fizzbuzz".
 * Each output is printed on a new line.
 *
 * @function fizzBuzz
 * @returns {void} This function does not return a value; it only prints to the console.
 *
 * @example
 * // Console output:
 * // 1
 * // 2
 * // fizz
 * // 4
 * // buzz
 * // fizz
 * // 7
 * // ...
 * // fizzbuzz
 * fizzBuzz();
 */
function fizzBuzz(): void {
     for (let i = 1; i <= 100; ++i) {
          // First we need to make sure that the numbers are divisibl by 3 and 5
         let divisibleByThree = i % 3 == 0;
         let divisibleByFive = i % 5 == 0;
 
         if (divisibleByThree && divisibleByFive) {
             console.log("fizzBuzz"); // Doesn't need to have a return 'cause this program is just printing the values
         } else if (divisibleByFive) {
             console.log("buzz");
         } else if (divisibleByThree) {
             console.log("fizz");
         } else {
             console.log(i);
         }
     }
 }
 
 fizzBuzz();