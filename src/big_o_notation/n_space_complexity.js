module.exports = function n_space_complexity(n) {
    let array = new Array(n);
    for (let i = 0; i < n; i++) {
        array[i] = i * 2;
    }
    return array;
}