const factorial = require('./factorial');

console.log("Iterative: " + factorial.iterative(0));
console.log("Iterative: " + factorial.iterative(1));
console.log("Iterative: " + factorial.iterative(3));
console.log("Iterative: " + factorial.iterative(4));

console.log("Recursive: " + factorial.recursive(0));
console.log("Recursive: " + factorial.recursive(1));
console.log("Recursive: " + factorial.recursive(3));
console.log("Recursive: " + factorial.recursive(4));