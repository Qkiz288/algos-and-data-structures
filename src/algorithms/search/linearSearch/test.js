const linearSearch = require('./linearSearch');

console.log("Expected 4: " + linearSearch(["a", 1, {}, true, "b", null], "b"));
console.log("Expected -1: " + linearSearch(["a", 1, {}, true, "b", null], 2));