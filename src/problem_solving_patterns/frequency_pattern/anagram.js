// function to determine if the second string is an anagram of the first
// '' , '' - true
// 'aaz' , 'zza' - false
// 'cineMma' , 'icemMan' - true

// Below solution is O(n) complexity
module.exports.isAnagram = function isAnagram(str1, str2) {
    // check if strings have the same length
    if (str1.length !== str2.length) {
        return false;
    }

    // lower case both strings
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // create frequency objects
    const freq1 = {};
    const freq2 = {};

    // iterate through str1
    for (const char of str1) {
        // count how many times each character appear and add to freq1
        // if char already exists in freq1 -> increment + 1
        // if char is not yet in freq1 -> initialize with val = 1
        freq1[char] = freq1[char] ? freq1[char] += 1 : 1; 
    }

    // iterate through str2
    for (const char of str2) {
        // count how many times each character appear and add to freq2
        // if char already exists in freq1 -> increment + 1
        // if char is not yet in freq1 -> initialize with val = 1
        freq2[char] = freq2[char] ? freq2[char] += 1 : 1; 
    }

    // iterate through freq1
    for (const key in freq1) {
        // check if freq1 key appears in freq2
        if (!(key in freq2)) {
            return false;
        }

        // check if freq1 key count is the same as freq2 key count
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
        
    // return true if everything goes well
    return true;
}

// Below solution is also O(n) complexity but it has 2 loops (not 3 like above solution)
module.exports.isAnagramEvenBetter = function isAnagramEvenBetter(str1, str2) {
    // check if strings have the same length
    if (str1.length !== str2.length) {
        return false;
    }

    // lower case both strings
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // create lookup object
    const lookup = {};

    // loop through str1
    for (const char of str1) {
        // if char is not in lookup, initialize with value 1
        // if char already exists in lookup, increment + 1
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
        
    // loop through str2
    for (const char of str2) {
        // check if char is in lookup
        // YES - decrement - 1
        // NO - return false
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }
        
    // if everything goes well, return true
    return true;
}