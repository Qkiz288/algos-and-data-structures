const collectOdds = require('./collectOdds');

console.log("Helper Method Recursion: " + collectOdds.collectOdds([1,2,3,4,5]));
console.log("Helper Method Recursion: " + collectOdds.collectOdds([-1,2,13,4,7]));

console.log("Pure recursion: " + collectOdds.collectOddsPureRecursion([1,2,3,4,5]));
console.log("Pure recursion: " + collectOdds.collectOddsPureRecursion([-1,2,13,4,7]));