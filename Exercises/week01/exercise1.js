// exercise1.js

"use strict";

// Define an array with all the scores
let scores = [10, -5, 20, -3, 15, 7, -8, 25];

// Duplicate the array
let modifiedScores = [...scores];

// Eliminate all negative scores
let negativeScoresCount = 0;
modifiedScores = modifiedScores.filter(score => {
  if (score < 0) {
    negativeScoresCount++;
    return false;
  }
  return true;
});

// Eliminate the two lowest-ranking scores
modifiedScores.sort((a, b) => a - b);
modifiedScores = modifiedScores.slice(2);

// Add NN+2 new scores with the value equal to the rounded average of the existing scores
let averageScore = Math.round(modifiedScores.reduce((a, b) => a + b, 0) / modifiedScores.length);
for (let i = 0; i < negativeScoresCount + 2; i++) {
  modifiedScores.push(averageScore);
}

// Print both arrays
console.log("Original Scores:", scores);
console.log("Modified Scores:", modifiedScores);
