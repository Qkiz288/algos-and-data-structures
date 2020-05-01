const squared_array = require('./squared_array');

console.log(squared_array.naiveSolution([2, 4, 3, 2], [9, 4, 16, 4]));
console.log(squared_array.naiveSolution([2, 4, 3], [9, 4, 16, 4]));

console.log(squared_array.betterSolution([2, 4, 3, 2], [9, 4, 16, 4]));
console.log(squared_array.betterSolution([2, 4, 3, 2], [16, 4, 16, 4]));