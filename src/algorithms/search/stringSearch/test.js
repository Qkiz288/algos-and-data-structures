const stringSearch = require('./stringSearch');

console.log("Naive solution (expected 2): " + stringSearch.naiveSolution("Banana", "na"));
console.log("Naive solution (expected 0): " + stringSearch.naiveSolution("B", "na"));
console.log("Naive solution (expected 1): " + stringSearch.naiveSolution("Lorrie loled", "lol"));
console.log("Naive solution (expected 1): " + stringSearch.naiveSolution("omgmgOmg", "Omg"));