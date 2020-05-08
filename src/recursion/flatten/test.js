const flatten = require('./flatten');


console.log("Expected 1,2,3 : " + flatten([[1],[2],[3]])); 

console.log("Expected 1,2,3 : " + flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

console.log("Expected 1,2,3,4,5 : " + flatten([1, 2, 3, [4, 5]]));

console.log("Expected 1,2,3,4,5 : " + flatten([1, [2, [3, 4], [[5]]]]));
