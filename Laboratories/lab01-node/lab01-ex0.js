/* 
 * [2024/2025]
 * Web Applications
 * Lab 1 - Exercise 0
 */

'use strict';

// Array of words to process
const words = ["spring", "summer", "a", "ab", "abc", "autumn", "winter"];

/**
 * Function to resize a string based on the given rules:
 * - If the string is shorter than 2 characters, return an empty string.
 * - If the string is 2 or 3 characters long, return the same character two times.
 * - Otherwise, return a new string composed of the first two and last two characters.
 * 
 * @param {string} str - The input string to resize.
 * @returns {string} - The resized string.
 */
function resizeString(str) {
    if (str.length < 2) {
        return "";
    } else if (str.length <= 3) {
        return str.substring(0, 2) + str.substring(0, 2);
    } else {
        return str.substring(0, 2) + str.substring(str.length - 2, str.length);
    }
}

// Process each word in the array and print the resized string
for (let i = 0; i < words.length; i++) {
    const str = resizeString(words[i]);
    console.log(str);  // Printing one string per line
}

// Functional alternative to process and print the whole array in one line
/*
const newWords = words.map((str) => resizeString(str));
console.log(newWords);  // printing the whole array in one line
*/

/** Other Possible Approaches **/

// ALTERNATIVE 1: Using for...of loop with entries
/*
for (const [i, w] of words.entries()) {
    if (w.length < 2) {
        words[i] = "";
    } else if (w.length <= 3) {
        words[i] = w.substring(0, 2) + w.substring(0, 2);
    } else {
        words[i] = w.substring(0, 2) + w.substring(w.length - 2, w.length);
    }
}
console.log(words);  // printing the whole array in one line
*/

// ALTERNATIVE 2: Using forEach loop
/*
words.forEach((item, index) => {
    if (item.length < 2) {
        words[index] = "";
    } else if (item.length <= 3) {
        words[index] = item.substring(0, 2) + item.substring(0, 2);
    } else {
        words[index] = item.substring(0, 2) + item.substring(item.length - 2, item.length);
    }
});
console.log(words);  // printing the whole array in one line
*/
