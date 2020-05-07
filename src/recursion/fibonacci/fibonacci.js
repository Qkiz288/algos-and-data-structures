// Fibonacci sequence
// 1,1,2,3,5,8 - another number is equal to sum of two previous numbers

module.exports = function fibonacci(num) {
    // base case
    if (num < 3) {
        return 1;
    }

    // n'th number is equal to n-1'th + n-2'th
    return fibonacci(num - 1) + fibonacci(num - 2);
}