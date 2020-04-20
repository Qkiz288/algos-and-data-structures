let constant_space_complexity_algo = require('./1_space_complexity');
let n_space_complexity = require('./n_space_complexity')

// Algorithms listed from the best space complexity to the worst

// Algorithm space complexity O(1) = constant
// Only 1 space allocation no matter on the size of n
constant_space_complexity_algo(100);

// Algorithm space complexity O(n) = linear
// Space allocation grows linearly with n
n_space_complexity(100);