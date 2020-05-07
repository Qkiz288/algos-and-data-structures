// function which accepts number of unsorted arguments and check whether there are any duplicates

// solution uses 2 pointers but still has O(n^2) time complexity
module.exports.naiveSolution = function naiveSolution() {
    
    // create 2 pointers, one on the beginning and one on the end
    let index1 = 0;
    let index2 = arguments.length - 1;

    // iterate until pointers meet
    while(index1 < index2) {

        // if numbers are the same, we're done
        if (arguments[index1] === arguments[index2]) {
            return true;
        } else {
            // else, move index2 to the left
            index2--;
            // if pointers meet, increment index1 and move index2 to the end
            if (index2 === index1) {
                index1++;
                index2 = arguments.length - 1;
            }
        }
    }

    // if no duplicates found, return false
    return false;
}

module.exports.betterSolution = function betterSolution(...args) {

    // sort the input arguments
    args.sort((a,b) => a - b);

    // create 2 pointers
    let index1 = 0;
    let index2 = index1 + 1;

    // go through all arguments
    while (index2 < args.length) {

        // if values are the same, we're done
        if (args[index1] === args[index2]) {
            return true;
        }

        // if not, increment pointers
        index1++;
        index2++;
    }

    // if no duplicate is found, return false;
    return false;
}