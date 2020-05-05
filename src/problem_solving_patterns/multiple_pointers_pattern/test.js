const sumZero = require('./sumZero');
const uniqueVal = require('./countUniqueValues');

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