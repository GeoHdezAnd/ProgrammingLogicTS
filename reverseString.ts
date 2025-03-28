/**
 * Reverses a string using a loop
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 * @timeComplexity O(n) - Linear time (iterates through each character once)
 * @spaceComplexity O(n) - Creates a new string of same length
 */

function reverseStringLoop(str: string): string {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseStringLoop("Hola mundo!"))

/**
 * Reverses a string using array methods
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 * @timeComplexity O(n) - split and join are O(n), reverse is O(n/2)
 * @spaceComplexity O(n) - Creates temporary array
 */

function reverseStringMethods(str: string): string {
    return str.split("").reverse().join("");
}
console.log(reverseStringMethods("Hola mundo!"))

/**
 * Reverses a string using recursion
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 * @timeComplexity O(n) - Makes n recursive calls
 * @spaceComplexity O(n) - Call stack grows linearly with input size
 * @example
 * // returns "odnum aloH"
 * reverseStringRecursive("Hola mundo")
 */

function reverseStringRecursive(str: string): string{
    if(str === "") return "";
    return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

console.log(reverseStringRecursive("Hola mundo"))