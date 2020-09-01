const Tokenizer = require('./Tokenizer').Tokenizer;
const OperatorToken = require('./tokens/OperatorToken').OperatorToken;
const PlusToken = require('./tokens/PlusToken').PlusToken;
const MinusToken = require('./tokens/MinusToken').MinusToken;
const MultiplicationToken = require('./tokens/MultiplicationToken').MultiplicationToken;
const DivisionToken = require('./tokens/DivisionToken').DivisionToken;
const OpeningBracketToken = require('./tokens/OpeningBracketToken').OpeningBracketToken;
const ClosingBracketToken = require('./tokens/ClosingBracketToken').ClosingBracketToken;
const NumberToken = require('./tokens/NumberToken').NumberToken;
const DotToken = require('./tokens/DotToken').DotToken;

module.exports.MathParser = class MathParser {
    constructor(expression) {
        this.tokenizer = new Tokenizer(expression);
    }

    // Expression := [ "-" ] Term { ("+" | "-") Term }
    parseExpression() {
        const isNegative = this.nextIsMinus();
        if (isNegative) {
            this.tokenizer.getNext();
        }
        let valueOfExpression = this.parseTerm();
        if (isNegative) {
            valueOfExpression = -valueOfExpression;
        }
        while (this.nextIsMinusOrPlus()) {
            const operand = this.tokenizer.getNext();
            const nextTermValue = this.parseTerm();
            if (operand instanceof PlusToken) {
                valueOfExpression += nextTermValue;
            } else {
                valueOfExpression -= nextTermValue;
            }
        }
        return valueOfExpression;
    }

    // Term := Factor { ( "*" | "/" ) Factor }
    parseTerm() {
        let totalValue = this.parseFactor();
        while (this.nextIsMultiplicationOrDivision()) {
            const operand = this.tokenizer.getNext();
            const nextFactor = this.parseFactor();

            if (operand instanceof MultiplicationToken) {
                totalValue *= nextFactor;
            } else {
                totalValue /= nextFactor;
            }
        }
        return totalValue;
    }

    // Factor := RealNumber | "(" Expression ")"
    parseFactor() {
        if (this.nextIsDigit()) {
            const number = this.parseNumber();
            return number;
        }

        if (!this.nextIsOpeningBracket()) {
            throw new Error(`Expected number or '(', but got: ${this.tokenizer.getNext()}`);
        }

        this.tokenizer.getNext();
        const value = this.parseExpression();

        if (!this.nextIsClosingBracket()) {
            throw new Error(`Expected ')', but got: ${this.tokenizer.getNext()}`);
        }
        this.tokenizer.getNext();
        return value;
    }

    nextIsMinus() {
        return this.tokenizer.isNextOfType(MinusToken);
    }

    nextIsMinusOrPlus() {
        return this.tokenizer.isNextOfType(MinusToken) || this.tokenizer.isNextOfType(PlusToken);
    }
    
    nextIsMultiplicationOrDivision() {
        return this.tokenizer.isNextOfType(MultiplicationToken) || this.tokenizer.isNextOfType(DivisionToken);
    }

    nextIsDigit() {
        return this.tokenizer.isNextOfType(NumberToken);
    }

    nextIsDot() {
        return this.tokenizer.isNextOfType(DotToken);
    }

    nextIsOpeningBracket() {
        return this.tokenizer.isNextOfType(OpeningBracketToken);
    }

    nextIsClosingBracket() {
        return this.tokenizer.isNextOfType(ClosingBracketToken);
    }

    parseNumber() {
        const token = this.tokenizer.getNext();
        if (!(token instanceof NumberToken)) {
            throw new Error(`Expected a number but found: ${token}`);
        }
        const digits = [];
        digits.push(token.value);
        while (this.nextIsDigit() || this.nextIsDot()) {
            const nextToken = this.tokenizer.getNext();
            digits.push(nextToken.value);
        }
        const number = digits.join("");
        return +number;
    }
}