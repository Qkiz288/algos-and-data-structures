const radixHelper = require('./radixHelper');

console.log("Expected 5: " + radixHelper.getDigit(12345, 0));
console.log("Expected 4: " + radixHelper.getDigit(12345, 1));
console.log("Expected 3: " + radixHelper.getDigit(12345, 2));
console.log("Expected 2: " + radixHelper.getDigit(12345, 3));
console.log("Expected 1: " + radixHelper.getDigit(12345, 4) + "\n");

console.log("Expected 5: " + radixHelper.digitCount(12345));
console.log("Expected 1: " + radixHelper.digitCount(0) + "\n");

console.log("Expected 4: " + radixHelper.mostDigits([1, 22, 333, 4444]));