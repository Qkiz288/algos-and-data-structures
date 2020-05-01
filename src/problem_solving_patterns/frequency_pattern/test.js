const squared_array = require('./squared_array');
const anagram = require('./anagram');

console.log("Naive passed: " + squared_array.naiveSolution([2, 4, 3, 2], [9, 4, 16, 4]));
console.log("Naive failed: " + squared_array.naiveSolution([2, 4, 3], [9, 4, 16, 4]));

console.log("Better passed: " + squared_array.betterSolution([2, 4, 3, 2], [9, 4, 16, 4]));
console.log("Better failed: " + squared_array.betterSolution([2, 4, 3, 2], [16, 4, 16, 4]));

console.log("Anagram passed: " + anagram.isAnagram('cineMma', 'icemMan'));
console.log("Anagram passed: " + anagram.isAnagram('', ''));
console.log("Anagram failed: " + anagram.isAnagram('zZa', 'Aza'));

console.log("Anagram even better: " + anagram.isAnagramEvenBetter('cineMma', 'icemMan'));
console.log("Anagram even better: " + anagram.isAnagramEvenBetter('', ''));
console.log("Anagram even better: " + anagram.isAnagramEvenBetter('zZa', 'Aza'));