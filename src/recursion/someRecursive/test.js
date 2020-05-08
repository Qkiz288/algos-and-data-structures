const someRecursive = require('./someRecursive');

const isOdd = val => val % 2 !== 0;

console.log("Some Recursive (expected true): " + someRecursive([4,6,8,9], isOdd));
console.log("Some Recursive (expected false): " + someRecursive([4,6,8], isOdd));