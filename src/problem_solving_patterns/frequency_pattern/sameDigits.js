// given two positive integers, find out if two numbers 
// have the same frequency of digits

// solution using frequency pattern - O(n) time complexity
module.exports = function sameDigits(n1, n2) {
    // cast two numbers to string
    n1 = n1.toString();
    n2 = n2.toString();

    // check if they have the same length
    if (n1.length !== n2.length) {
        return false;
    }

    // create empty object to hold frequencies
    const freq = {};

    // iterate through n1
    for (let n of n1) {
        // if number is already in frequency object -> inrement
        // if number is not in frequency object -> initialize to 1
        freq[n] ? freq[n] += 1 : freq[n] = 1;
    }

    // iterate through n2
    for (let n of n2) {
        // if current number is in frequency object 
        // and count is greater than 0 -> decrement
        if (freq[n] && freq[n] > 0) {
            freq[n] -= 1;
        // otherwise - it means that n1 and n2 numbers
        // dont contain the same digits
        } else {
            return false;
        }
    }

    return true
}