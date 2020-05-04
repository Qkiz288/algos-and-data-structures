const sumZero = require('./sumZero');

console.log("Naive solution found: " + sumZero.naiveSolution([-3,-2,-1,0,1,2,3]));
console.log("Naive solution not found: " + sumZero.naiveSolution([-1,2,3]));

console.log("Better solution found: " + sumZero.betterSolution([-4,-3,-1,0,1,2,10]));
console.log("Better solution not found: " + sumZero.betterSolution([-4,-3,-1,0,2,10]));