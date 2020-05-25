const radixHelper = require('./helpers/radixHelper')

module.exports = function radixSort(numbers) {
    let numOfIterations = radixHelper.mostDigits(numbers);
    for (let k = 0; k < numOfIterations; k++) {
        bucket.clear();
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            let digit = radixHelper.getDigit(number, k);
            bucket[digit].push(number);
        }
        numbers = [];
        for (let j = 0; j <=9; j++) {
            numbers = numbers.concat(bucket[j]);
        }
    }
    return numbers;
}

const bucket = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],

    clear: function() {
        for (let i = 0; i <= 9; i++) {
            bucket[i] = [];
        }
    }
}