const product = require('./productOfArray');

console.log("Expected product = 6: " + product([1,2,3]));
console.log("Expected product = 2: " + product([-1,-2,]));
console.log("Expected product = 1: " + product([1]));