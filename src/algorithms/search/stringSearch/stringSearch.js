// function accepts two string and returns count how many times second string is found in the first string
// solution case sensitive

module.exports.naiveSolution = function naiveSolution(source, target) {

    // initialize count variable
    let count = 0;

    // loop through first string
    for (let i = 0; i < source.length - target.length + 1; i++) {
        
        // loop through second string
        for (let j = 0; j < target.length; j++) {

            // get the compated characters
            let targetChar = target[j];
            let sourceChar = source[i + j];

            // if char from 1st string is not equal to char from 2nd string, break the looop
            if (sourceChar !== targetChar) {
                break;
            }

            // if looped to the end of 2nd string without break, it is a match -> increment count
            if (j === target.length - 1) {
                count++;
            }
        }
    }

    return count;
}