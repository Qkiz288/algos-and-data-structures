const MathParser = require('./MathParser').MathParser;
const singlePlusMinusOperationData = require('./testData').singlePlusMinusOperationData;
const doublePlusMinusOperationData = require('./testData').doublePlusMinusOperationData;
const triplePlusMinusOperationData = require('./testData').triplePlusMinusOperationData;
const singleMultiplyDivideOperationData = require('./testData').singleMultiplyDivideOperationData;
const doubleMultiplyDivideOperationData = require('./testData').doubleMultiplyDivideOperationData;
const doubleMixedOperationData = require('./testData').doubleMixedOperationData;
const parenthesisOperationData = require('./testData').parenthesisOperationData;
const caretOperationData = require('./testData').caretOperationData;

describe("Recursive Descent Parser tests", function() {

    
    singlePlusMinusOperationData.forEach(testData => 
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
    
    
    doublePlusMinusOperationData.forEach(testData => 
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

    
    triplePlusMinusOperationData.forEach(testData => 
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

    
    singleMultiplyDivideOperationData.forEach(testData => 
        it("Valid two numbers multiplication/division expression", function() {
            // given
            const expression = `${testData.num1}${testData.operator}${testData.num2}`;
            mathParser = new MathParser(expression);
        
            // when
            const result = mathParser.parseExpression();
        
            // then
            expect(result).toEqual(testData.expectedResult);
        })
    );

    doubleMultiplyDivideOperationData.forEach(testData => 
        it("Valid three numbers multiplication/division expression", function() {
            // given
            const expression = `${testData.num1}${testData.operator1}${testData.num2}${testData.operator2}${testData.num3}`;
            mathParser = new MathParser(expression);
        
            // when
            const result = mathParser.parseExpression();
        
            // then
            expect(result).toEqual(testData.expectedResult);
        })
    );

    doubleMixedOperationData.forEach(testData => 
        it("Valid three numbers addition/subtraction/multiplication/division expression", function() {
            // given
            const expression = `${testData.num1}${testData.operator1}${testData.num2}${testData.operator2}${testData.num3}`;
            mathParser = new MathParser(expression);
        
            // when
            const result = mathParser.parseExpression();
        
            // then
            expect(result).toEqual(testData.expectedResult);
        })
    );

    parenthesisOperationData.forEach(testData => 
        it(`Valid expression with parenthesis = ${testData.expression}`, function() {
            // given
            const expression = testData.expression;
            mathParser = new MathParser(expression);
        
            // when
            const result = mathParser.parseExpression();
        
            // then
            expect(result).toEqual(testData.expectedResult);
        })
    );

    caretOperationData.forEach(testData => 
        it(`Valid expression with caret = ${testData.expression}`, function() {
            // given
            const expression = testData.expression;
            mathParser = new MathParser(expression);
        
            // when
            const result = mathParser.parseExpression();
        
            // then
            expect(result).toEqual(testData.expectedResult);
        })
    );

});