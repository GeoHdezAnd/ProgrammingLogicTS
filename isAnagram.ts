/**
 * Checks if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @returns {boolean} - Returns `true` if the strings are anagrams, otherwise `false`.
 *
 * @example
 * console.log(isAnagrama("amor", "roma")); // true
 * console.log(isAnagrama("triangle", "integral")); // true
 * console.log(isAnagrama("hello", "world")); // false
 * console.log(isAnagrama("Debit card", "Bad credit")); // true
 */
function isAnagrama(str1: string, str2: string): boolean {
    // Normalize the strings: convert to lowercase and remove non-alphabetic characters
    const normalize = (str: string) => str.toLowerCase().replace(/[^a-z]/g, '');
    const normalizeStr1 = normalize(str1);
    const normalizeStr2 = normalize(str2);

    // If the lengths of the normalized strings are different, they cannot be anagrams
    if (normalizeStr1.length !== normalizeStr2.length) {
        return false;
    }

    // Sort the characters of both strings and compare the sorted strings
    return (
        // Let's break how works each of this methods
        // 1. split() - split the string into an array of characters
        // 2. sort() - sort the array of characters in alphabetical order
        // 3. join() - join the sorted array of each character back into a string
        // the we compare the two strings to make sure if they are equals
        normalizeStr1.split("").sort().join("") === normalizeStr2.split("").sort().join("")
    );
}
