const squared_array = require('./squared_array');
const anagram = require('./anagram');
const sameDigits = require('./sameDigits');

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

console.log("Same digits (passed): " + sameDigits(182, 281));
console.log("Same digits (failed): " + sameDigits(34, 14));
console.log("Same digits (failed): " + sameDigits(22, 222));
console.log("Same digits (passed): " + sameDigits(3589578, 5879385));