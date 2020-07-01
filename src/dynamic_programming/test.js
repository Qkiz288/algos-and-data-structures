const fibonacciRecursive = require('./Fibonacci').fibonacciRecursive;
const fibonacciTabulation = require('./Fibonacci').fibonacciTabulation;

describe("Fibonacci sequence test with Dynamic Programming paradigm", function() {

[{input: 0, expected: 0},
 {input: 1, expected: 1},
 {input: 2, expected: 1},
 {input: 3, expected: 2},
 {input: 4, expected: 3},
 {input: 5, expected: 5},
 {input: 10, expected: 55},
 {input: 15, expected: 610},
 {input: 40, expected: 102334155},
 {input: 50, expected: 12586269025},
 {input: 60, expected: 1548008755920},
 {input: 90, expected: 2880067194370816120}]
 .forEach(testData => 
    it(`Should return ${testData.expected} for input = ${testData.input}`, function() {
        // when
        const resultRecursive = fibonacciRecursive(testData.input);
        const resultTabulation = fibonacciTabulation(testData.input);
    
        //then
        expect(resultRecursive).toBe(testData.expected);
        expect(resultTabulation).toBe(testData.expected);
    }));



});