const radixHelper = require('./helpers/radixHelper')

module.exports = function radixSort(numbers) {

    // define number of iterations = number of digits in largest number
    let numOfIterations = radixHelper.mostDigits(numbers);

    // iterate numOfIterations times
    for (let k = 0; k < numOfIterations; k++) {

        // clear the buckets
        bucket.clear();

        // iterate through all numbers from the input array
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];

            // get k'th last digit from the number
            let digit = radixHelper.getDigit(number, k);

            // push the number into correct bucket
            bucket[digit].push(number);
        }

        // reset number list
        numbers = [];

        // take out all numbers from the buckets in correct order
        // and put them in numbers
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