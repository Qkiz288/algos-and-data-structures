let constant_time_complexity_algo = require('./1_time_complexity');
let n_time_complexity_algo = require('./n_time_complexity');
let squared_time_complexity_algo = require('./n^2_time_complexity');

// Algorithms listed from the best time complexity to the worst

// Algorithm time complexity O(1) = constant
// Number of operations to be performed by algo is constant
let start = new Date().getTime();
constant_time_complexity_algo(10000000000);
let end = new Date().getTime();
console.log(`Time: ${(end - start) / 1000} seconds`);

// Algorithm time complexity O(log(n)) = logarithm n
// Number of operations to be performed by algo grows like algorithm
// TBD

// Algorithm time complexity O(n) = linear
// Number of operations to be performed by algo is growing linearly
start = new Date().getTime();
n_time_complexity_algo(10000000000);
end = new Date().getTime();
console.log(`Time: ${(end - start) / 1000} seconds`);

// Algorithm time complexity O(n*log(n)) = n logarithm n
// Number of operations to be performed by algo is growing n times logarithm n
// TBD

// Algorithm time complexity O(n^2) = squared
// Number of operations to be performed by algo grows like square parabola
start = new Date().getTime();
squared_time_complexity_algo(100000);
end = new Date().getTime();
console.log(`Time: ${(end - start) / 1000} seconds`);
