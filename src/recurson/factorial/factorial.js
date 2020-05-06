// 4! = 24
// iterative solution
module.exports.iterative = function iterative(num) {
    let total = 1;
    for (num; num > 0; num--) {
        total = total * num;
    }
    return total;
}

// resursive solution
module.exports.recursive = function recursive(num) {
    // idetify base case
    if (num === 0) {
        return 1;
    }
    return num * recursive(num - 1);
}