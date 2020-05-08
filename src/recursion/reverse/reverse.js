// function which accepts a string and returns a new string in reverse

module.exports = function reverse(str) {
    // base case
    if (str.length === 0) {
        return "";
    }

    // get the first char from input string
    const firstChar = str[0];

    // get the rest of the chars
    const substring = str.substr(1);

    // output string is reversed rest of the chars + first char on the end
    return reverse(substring) + firstChar;
}