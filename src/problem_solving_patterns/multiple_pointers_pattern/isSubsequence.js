// function takes in two strings and checks whether the characters in the first string
// form a subsequence of characters in the second string
// 'hello' , 'hello world' - true
// 'sing' , 'string' - true
// 'abc' - 'acb' - false - order matters

module.exports = function isSubsequence(target, source) {
    // pointers for target and source strings
    let p1 = 0;
    let p2 = 0

    // loop until we reach end of source string
    while (p2 < source.length) {
        const targetChar = target[p1];
        const sourceChar = source[p2];

        // if chars are the same
        if (sourceChar === targetChar) {
            // if we reached the end of target string - we're done
            if (p1 === target.length - 1) {
                return true;
            }
            // increment pointers to check next chars
            p1++;
            p2++;
        }
        // if chars are different, check next char from source
        else {
            p2++;
        }
    }

    return false;
}