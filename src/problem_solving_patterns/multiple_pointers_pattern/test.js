const sumZero = require('./sumZero');
const uniqueVal = require('./countUniqueValues');
const duplicates = require('./areThereDuplicates');
const averagePair = require('./averagePair');
const isSubsequence = require('./isSubsequence');

console.log("Naive solution found: " + sumZero.naiveSolution([-3,-2,-1,0,1,2,3]));
console.log("Naive solution not found: " + sumZero.naiveSolution([-1,2,3]));

console.log("Better solution found: " + sumZero.betterSolution([-4,-3,-1,0,1,2,10]));
console.log("Better solution not found: " + sumZero.betterSolution([-4,-3,-1,0,2,10]));

console.log("Count Unique Values (sol1): " + uniqueVal.betterSolution([1,1,1,1,1,2]));
console.log("Count Unique Values (sol1): " + uniqueVal.betterSolution([1,2,3,4,4,4,7,7,12,13]));
console.log("Count Unique Values (sol1): " + uniqueVal.betterSolution([]));
console.log("Count Unique Values (sol1): " + uniqueVal.betterSolution([-2,-1,-1,-1,0,1]));

console.log("Count Unique Values (sol2): " + uniqueVal.anotherBetterSolution([-1,-1,1,1,1,2,3,4,10]));
console.log("Count Unique Values (sol2): " + uniqueVal.anotherBetterSolution([0,0,0,0,0,0,10]));
console.log("Count Unique Values (sol2): " + uniqueVal.anotherBetterSolution([]));

console.log("Are there duplicates (naive): " + duplicates.naiveSolution(1,2,5,3,5,7,6,11));
console.log("Are there duplicates (naive): " + duplicates.naiveSolution(1,2,3,5,7,6,11));

console.log("Are there duplicates (better): " + duplicates.betterSolution(1,2,5,3,5,7,6,11));
console.log("Are there duplicates (better): " + duplicates.betterSolution(1,2,3,5,7,6,11));

console.log("Average pair (expected true): " + averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log("Average pair (expected false): " + averagePair([-5,1,3,3,5,6,7,10,12,19], 0));
console.log("Average pair (expected true): " + averagePair([1,1], 1));
console.log("Average pair (expected false): " + averagePair([1], 1));

console.log("isSubsequent (expected true): " + isSubsequence("sing", "string"));
console.log("isSubsequent (expected true): " + isSubsequence("hello", "hello world"));
console.log("isSubsequent (expected true): " + isSubsequence("wame?", "what's your name?"));
console.log("isSubsequent (expected false): " + isSubsequence("abc", "acb"));