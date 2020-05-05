const binarySearch = require('./binarySearch');

console.log("Naive solution: " + binarySearch.naiveSolution([1,2,3,7,11,12,15,16], 12));
console.log("Naive solution: " + binarySearch.naiveSolution([1,2,3,7,11,12,15,16], 13));

console.log("Better solution: " + binarySearch.betterSolution([1,2,3,7,11,12,15,16], 12));
console.log("Better solution: " + binarySearch.betterSolution([1,2,3,7,11,12,15,16], 13));