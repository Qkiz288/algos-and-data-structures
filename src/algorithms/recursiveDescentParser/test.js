const MathParser = require('./MathParser').MathParser;

describe("Recursive Descent Parser tests", function() {

    [
        {num1: 1, num2: 2, operator: "+", expectedResult: 3},
        {num1: 10, num2: 2, operator: "+", expectedResult: 12},
        {num1: 1, num2: 20, operator: "+", expectedResult: 21},
        {num1: -1, num2: 2, operator: "+", expectedResult: 1},
        {num1: -10, num2: 2, operator: "+", expectedResult: -8},
        {num1: -1, num2: 20, operator: "+", expectedResult: 19},
        {num1: 1, num2: 2, operator: "-", expectedResult: -1},
        {num1: 10, num2: 2, operator: "-", expectedResult: 8},
        {num1: 1, num2: 20, operator: "-", expectedResult: -19},
        {num1: -1, num2: 2, operator: "-", expectedResult: -3},
        {num1: -10, num2: 2, operator: "-", expectedResult: -12},
        {num1: -1, num2: 20, operator: "-", expectedResult: -21},
        {num1: 0, num2: 0, operator: "-", expectedResult: 0},
        {num1: 00, num2: 0, operator: "-", expectedResult: 0},
        {num1: 0, num2: 00, operator: "-", expectedResult: 0},
        {num1: 0, num2: 0, operator: "+", expectedResult: 0},
        {num1: 00, num2: 0, operator: "+", expectedResult: 0},
        {num1: 0, num2: 00, operator: "+", expectedResult: 0},
    ]
        .forEach(testData => 
            it("Valid two numbers addition/subtraction expression", function() {
                // given
                const expression = `${testData.num1}${testData.operator}${testData.num2}`;
                mathParser = new MathParser(expression);

                // when
                const result = mathParser.parseExpression();

                // then
                expect(result).toEqual(testData.expectedResult);
            })
        );
    
    [
        {num1: 1, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: 6},
        {num1: 10, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: 15},
        {num1: 1, num2: 20, num3: 3, operator1: "+", operator2: "+", expectedResult: 24},
        {num1: 1, num2: 2, num3: 30, operator1: "+", operator2: "+", expectedResult: 33},
        {num1: -1, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: 4},
        {num1: -10, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: -5},
        {num1: -1, num2: 20, num3: 3, operator1: "+", operator2: "+", expectedResult: 22},
        {num1: -1, num2: 2, num3: 30, operator1: "+", operator2: "+", expectedResult: 31},
        {num1: 1, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -4},
        {num1: 10, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: 5},
        {num1: 1, num2: 20, num3: 3, operator1: "-", operator2: "-", expectedResult: -22},
        {num1: 1, num2: 2, num3: 30, operator1: "-", operator2: "-", expectedResult: -31},
        {num1: -1, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -6},
        {num1: -10, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -15},
        {num1: -1, num2: 20, num3: 3, operator1: "-", operator2: "-", expectedResult: -24},
        {num1: -1, num2: 2, num3: 30, operator1: "-", operator2: "-", expectedResult: -33},
        {num1: 0, num2: 0, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
        {num1: 00, num2: 0, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
        {num1: 0, num2: 00, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
        {num1: 0, num2: 0, num3: 00, operator1: "-", operator2: "-", expectedResult: 0},
        {num1: 0, num2: 0, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
        {num1: 00, num2: 0, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
        {num1: 0, num2: 00, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
        {num1: 0, num2: 0, num3: 00, operator1: "+", operator2: "+", expectedResult: 0},
        {num1: 1, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: 0},
        {num1: 10, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: 9},
        {num1: 1, num2: 20, num3: 3, operator1: "+", operator2: "-", expectedResult: 18},
        {num1: 1, num2: 2, num3: 30, operator1: "+", operator2: "-", expectedResult: -27},
        {num1: -1, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: -2},
        {num1: -10, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: -11},
        {num1: -1, num2: 20, num3: 3, operator1: "+", operator2: "-", expectedResult: 16},
        {num1: -1, num2: 2, num3: 30, operator1: "+", operator2: "-", expectedResult: -29},
        {num1: 1, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: 2},
        {num1: 10, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: 11},
        {num1: 1, num2: 20, num3: 3, operator1: "-", operator2: "+", expectedResult: -16},
        {num1: 1, num2: 2, num3: 30, operator1: "-", operator2: "+", expectedResult: 29},
        {num1: -1, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: 0},
        {num1: -10, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: -9},
        {num1: -1, num2: 20, num3: 3, operator1: "-", operator2: "+", expectedResult: -18},
        {num1: -1, num2: 2, num3: 30, operator1: "-", operator2: "+", expectedResult: 27},
    ]
        .forEach(testData => 
            it("Valid three numbers addition/subtraction expression", function() {
                // given
                const expression = `${testData.num1}${testData.operator1}${testData.num2}${testData.operator2}${testData.num3}`;
                mathParser = new MathParser(expression);
        
                // when
                const result = mathParser.parseExpression()
        
                // then
                expect(result).toEqual(testData.expectedResult);
            }) 
        );

    [
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "+", expectedResult: 10},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "+", expectedResult: 8},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "+", expectedResult: 6},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "+", expectedResult: 4},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "+", expectedResult: 4},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "+", expectedResult: 2},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "-", expectedResult: 2},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "-", expectedResult: 0},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "+", expectedResult: 0},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "+", expectedResult: -2},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "-", expectedResult: -2},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "-", expectedResult: -4},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "-", expectedResult: -4},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "-", expectedResult: -6},
        {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "-", expectedResult: -8},
        {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "-", expectedResult: -10},
        {num1: 0, num2: 0, num3: 0, num4: 0, operator1: "+", operator2: "+", operator3: "+", expectedResult: 0},
        {num1: 0, num2: 0, num3: 0, num4: 0, operator1: "-", operator2: "-", operator3: "-", expectedResult: 0},
    ]
        .forEach(testData => 
            it("Valid four numbers addition/subtraction expression", function() {
                // given
                const expression = `${testData.num1}${testData.operator1}${testData.num2}${testData.operator2}${testData.num3}${testData.operator3}${testData.num4}`;
                mathParser = new MathParser(expression);

                // when
                const result = mathParser.parseExpression();
            
                // then
                expect(result).toEqual(testData.expectedResult);
                }) 
            );

    [
        {num1: 1, num2: 2, operator: "*", expectedResult: 2}, 
        {num1: -1, num2: 2, operator: "*", expectedResult: -2},   
        {num1: 10, num2: 2, operator: "*", expectedResult: 20}, 
        {num1: -10, num2: 2, operator: "*", expectedResult: -20},
        {num1: 1, num2: 20, operator: "*", expectedResult: 20},
        {num1: -1, num2: 20, operator: "*", expectedResult: -20}, 
    ]
        .forEach(testData => 
            it("Valid two numbers multiplication expression", function() {
                // given
                const expression = `${testData.num1}${testData.operator}${testData.num2}`;
                mathParser = new MathParser(expression);
        
                // when
                const result = mathParser.parseExpression();
        
                // then
                expect(result).toEqual(testData.expectedResult);
            })
        );

});