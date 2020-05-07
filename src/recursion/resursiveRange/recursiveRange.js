// function accepts a number and adds up all the numbers from 0 to the number passed to the function

module.exports = function recursiveRange(num) {
    // base case
    if (num === 0) {
        return 0;
    }

    // return number and recursive call on number - 1
    return num + recursiveRange(num - 1);
}