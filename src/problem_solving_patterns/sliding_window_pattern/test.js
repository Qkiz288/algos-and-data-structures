const maxSubarraySum = require('./maxSubarraySum');
const minSubArrayLen = require('./minSubArrayLen');

console.log("Naive solution: " + maxSubarraySum.naiveSolution([2,7,1,8,15,2,4,6], 2));
console.log("Naive solution: " + maxSubarraySum.naiveSolution([2,7,1,8,15,2,4,6], 4));
console.log("Naive solution (null): " + maxSubarraySum.naiveSolution([1], 2));

console.log("Better solution: " + maxSubarraySum.betterSolution([2,7,1,8,15,2,4,6], 2));
console.log("Better solution: " + maxSubarraySum.betterSolution([2,7,1,8,15,2,4,6], 4));
console.log("Better solution (null): " + maxSubarraySum.betterSolution([1], 2));

console.log("MinSubArray length (expected 2): " + minSubArrayLen([2,3,1,2,4,3], 7));
console.log("MinSubArray length (expected 2): " + minSubArrayLen([2,1,6,5,4], 9));
console.log("MinSubArray length (expected 1): " + minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
console.log("MinSubArray length (expected 5): " + minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
console.log("MinSubArray length (expected 0): " + minSubArrayLen([2,3,1,2,4,3], 16));
console.log("MinSubArray length (expected 0): " + minSubArrayLen([], 1));