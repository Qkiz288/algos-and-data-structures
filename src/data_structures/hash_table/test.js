const hash = require('./Hash').hash;
const HashTable = require('./HashTable').HashTable;

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

    describe("HashTable tests", function() {

        let hashTable;

        beforeEach(function() {
            hashTable = new HashTable();
        });

        it("Set 2 values at separate indexes", function() {
            // given
            const key1 = "Tester";
            const value1 = "Kamil";
            const key2 = "Developer";
            const value2 = "John";

            // when
            hashTable.set(key1, value1);
            hashTable.set(key2, value2);
            
            // then
            expect(hashTable.keyMap[hashTable.hash(key1)])
                .not.toEqual(hashTable.keyMap[hashTable.hash(key2)]);
        });
        
        it("Set 2 different keys at the same index", function() {
            // given
            const key1 = "Tester10";
            const value1 = "Kamil";
            const key2 = "Tester";
            const value2 = "John";

            // when
            hashTable.set(key1, value1);
            hashTable.set(key2, value2);

            // then
            expect(hashTable.keyMap[hashTable.hash(key1)])
                .toEqual(hashTable.keyMap[hashTable.hash(key2)]);
        });

        it("Update key with new value", function() {
            // given
            const key = "Tester";
            const value1 = "Kamil";
            const value2 = "John";

            // when
            hashTable.set(key, value1);
            hashTable.set(key, value2);

            // then
            expect(hashTable.keyMap[hashTable.hash(key)][0].value).toBe(value2);
        });

        it("Invalid get", function() {
            // given
            const key = "Manager";

            // when
            const result = hashTable.get(key);

            // then
           expect(result).toBe(undefined);
        });

        it("Valid get", function() {
            // given
            const givenKey = "Tester";
            const givenValue = "Kamil";
            hashTable.set(givenKey, givenValue);

            // when
            const result = hashTable.get(givenKey);

            // then
            expect(result).not.toBe(undefined);
            expect(result).toBe(givenValue);
        });

        it("Get all keys from hashTable", function() {
            // given
            const key1 = "Tester10";
            const value1 = "Kamil";
            const key2 = "Tester";
            const value2 = "John";
            const key3 = "Director";
            const value3 = "Director";
            hashTable.set(key1, value1);
            hashTable.set(key2, value2);
            hashTable.set(key3, value3);

            // when
            const result = hashTable.keys();

            // then
            expect(result.length).toBe(3);
            expect(result).toContain(key1);
            expect(result).toContain(key2);
            expect(result).toContain(key3);
        });

        it("Get all values from hashTable", function() {
            // given
            const key1 = "Tester10";
            const value1 = "Kamil";
            const key2 = "Tester";
            const value2 = "John";
            const key3 = "Director";
            const value3 = "Kamil";
            hashTable.set(key1, value1);
            hashTable.set(key2, value2);
            hashTable.set(key3, value3);

            // when
            const result = hashTable.values();

            // then
            expect(result.length).toBe(3);
            expect(result).toContain(value1);
            expect(result).toContain(value2);
            expect(result).toContain(value3);
        });

    });

});