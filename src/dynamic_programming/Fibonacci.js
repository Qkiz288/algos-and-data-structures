module.exports.fibonacci = function fibonacci(value, memo = []) {
    if (memo[value]) return memo[value];
    if (value === 0) return 0;
    if (value === 1) return 1;
    memo[value] = fibonacci(value - 1, memo) + fibonacci(value - 2, memo);
    return memo[value];
}