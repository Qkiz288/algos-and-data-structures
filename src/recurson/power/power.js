// function which accepts base and exponent and returns the power of the base to the exponent

module.exports = function power(base, exp) {

    // base case
    if (exp === 0) {
        return 1;
    }

    return base * power(base, exp - 1);
}