// heler method for radix sort. Returns n'th digit from the end of given number
 
module.exports.getDigit = function getDigit(number, n) {
    number = number.toString()
    if (number.length - 1 < n) {
        return 0;
    }
    return +number[number.length - 1 - n];
}

module.exports.digitCount = function digitCount(number) {
    return +number.toString().length;
}

module.exports.mostDigits = function mostDigits(numbers) {
    let mostDigitsNumber = numbers[0];
    for (let number of numbers) {
        if (number > mostDigitsNumber) {
            mostDigitsNumber = number;
        }
    }
    return this.digitCount(mostDigitsNumber);
}