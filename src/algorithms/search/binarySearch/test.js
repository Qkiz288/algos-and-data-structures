const binarySearch = require('./binarySearch');

console.log("Expected 1: " + binarySearch([1,2,3,4,5], 2));
console.log("Expected 2: " + binarySearch([1,2,3,4,5], 3));
console.log("Expected 4: " + binarySearch([1,2,3,4,5], 5));
console.log("Expected -1: " + binarySearch([1,2,3,4,5], 6));
console.log("Expected 10: " + binarySearch([1,2,5,7,9,10,15,18,20,56,78,99], 78));
console.log("Expected -1: " + binarySearch([], 0));
console.log("Expected 0: " + binarySearch([0], 0));
console.log("Expected 2: " + binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10));
console.log("Expected 16: " + binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95));
console.log("Expected -1: " + binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100));
console.log("Expected -1: " + binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 97));
