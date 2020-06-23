const hash = require('./Hash').hash;

describe("Hash-related tests", function() {

    describe("Hashing function tests", function() {

        [
        {key: "TEST ABC TEST BCD TEST CDB test 1 test 2 test 3", arrayLen: 5},
        {key: "TEST ABC TEST BCD TEST CDB test 1 test 2 test 3", arrayLen: 101},
        {key: "TEST", arrayLen: 5},
        {key: "TEST", arrayLen: 101}
        ].forEach(testData => 
            it(`Hashed value = ${testData.key} should be smaller than arrayLen = ${testData.arrayLen}`, function() {
                // given
                const key = testData.key;
                const arrayLen = testData.arrayLen;
    
                // when
                const result = hash(key, arrayLen);
    
                // then
                expect(result).toBeLessThan(arrayLen);
                expect(result).toBeGreaterThanOrEqual(0);
            })
        );
        
    });

});