// function which returns true if input string is palindrome (reads the same forward and backward)

module.exports = function palindrome(str) {
    // base case
    if (str.length <= 1) {
        return true;
    }

    // get first and last char
    const firstLetter = str.slice(0,1);
    const lastLetter = str.slice(str.length - 1);

    // get str without first and last char
    const substring = str.slice(1, str.length - 1);

    // if first and last chars are the same, check the same for substring without first and last char
    if (firstLetter === lastLetter) {
        return palindrome(substring);
    } 
    // if first and last char are not the same - it's not a palindrome
    else {
        return false;
    }
}