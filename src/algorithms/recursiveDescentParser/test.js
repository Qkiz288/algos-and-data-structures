const MathParser = require('./MathParser').MathParser;

describe("Recursive Descent Parser tests", function() {

    [
        {num1: 1, num2: 2, operator: "+", expectedResult: 3},
        {num1: 1, num2: 2, operator: "-", expectedResult: -1},
        {num1: 0, num2: 0, operator: "-", expectedResult: 0},
        {num1: 0, num2: 0, operator: "+", expectedResult: 0},
    ]
        .forEach(testData => 
            it("Valid two numbers expression", function() {
                // given
                const expression = `${testData.num1}${testData.operator}${testData.num2}`;
                mathParser = new MathParser(expression);

                // when
                const result = mathParser.parse(expression)

                // then
                expect(result).toEqual(testData.expectedResult);
            })
        );
    
    [
        {num1: 1, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: 6},
        {num1: 1, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -4},
        {num1: 0, num2: 0, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
        {num1: 0, num2: 0, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
    ]
        .forEach(testData => 
            it("Valid three numbers expression", function() {
                // given
                const expression = `${testData.num1}${testData.operator1}${testData.num2}${testData.operator2}${testData.num3}`;
                mathParser = new MathParser(expression);
        
                // when
                const result = mathParser.parse(expression)
        
                // then
                expect(result).toEqual(testData.expectedResult);
            }) 
        );

        [
            {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "+", expectedResult: 10},
            {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "-", expectedResult: -8},
            {num1: 0, num2: 0, num3: 0, num4: 0, operator1: "-", operator2: "-", operator3: "+", expectedResult: 0},
            {num1: 0, num2: 0, num3: 0, num4: 0, operator1: "+", operator2: "+", operator3: "+", expectedResult: 0},
        ]
            .forEach(testData => 
                it("Valid four numbers expression", function() {
                    // given
                    const expression = `${testData.num1}${testData.operator1}${testData.num2}${testData.operator2}${testData.num3}${testData.operator3}${testData.num4}`;
                    mathParser = new MathParser(expression);

                    // when
                    const result = mathParser.parse();
            
                    // then
                    expect(result).toEqual(testData.expectedResult);
                }) 
            );

});