// MEMOIZATION APPROACH
// recursive solution has one drawback = it can throw StackOverflowError - it has worse space complexity
module.exports.fibonacciMemoization= function fibonacciMemoization(value, memo = []) {
    if (memo[value]) return memo[value];
    if (value === 0) return 0;
    if (value === 1) return 1;
    memo[value] = fibonacciMemoization(value - 1, memo) + fibonacciMemoization(value - 2, memo);
    return memo[value];
}

// TABULATION APPROACH
// This is better and safer solution
module.exports.fibonacciTabulation = function fibonacciTabulation(value) {
    if (value === 0) return 0;
    if (value === 1) return 1;
    const fibNums = [0,1,1];
    for (let i = 3; i <= value; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[value];
}