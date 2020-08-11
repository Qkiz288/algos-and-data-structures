const Tokenizer = require('./Tokenizer').Tokenizer;
const OperatorToken = require('./tokens/OperatorToken').OperatorToken;
const PlusToken = require('./tokens/PlusToken').PlusToken;
const MinusToken = require('./tokens/MinusToken').MinusToken;
const NumberToken = require('./tokens/NumberToken').NumberToken;

module.exports.MathParser = class MathParser {
    constructor(expression) {
        this.tokenizer = new Tokenizer(expression);
    }

    parse() {
        let result = this.parseExpression();
        const nextToken = this.tokenizer.getNext();

        if (nextToken instanceof OperatorToken) {
            const operator = nextToken;
            const secondNumber = this.parse();

            if (operator instanceof PlusToken || operator instanceof MinusToken) {
                return result + secondNumber;
            }

            throw new Error(`Unknown operator: ${operator}`);
        }

        return result;
    }

    parseExpression() {
        const firstToken = this.tokenizer.getCurrent();
        let firstNumber;

        if (firstToken instanceof MinusToken) {
            this.tokenizer.moveForward();
            firstNumber = this.parseNumber() * -1;
        } else if (firstToken instanceof PlusToken) {
            this.tokenizer.moveForward();
            firstNumber = this.parseNumber();
        } else {
            firstNumber = this.parseNumber();
        }

        const nextToken = this.tokenizer.getNext();

        if (!nextToken) {
            return firstNumber;
        }

        if (nextToken instanceof OperatorToken) {
            const operator = nextToken;
            this.tokenizer.getNext();

            const secondNumber = this.parseNumber();

            if (operator instanceof PlusToken) {
                return firstNumber + secondNumber;
            }

            if (operator instanceof MinusToken) {
                return firstNumber - secondNumber;
            }

            throw new Error(`Unknown operator: ${operator}`);
        }

        throw new Error(`Expected operator after number but got: ${nextToken}`);
    }

    parseNumber() {
        const token = this.tokenizer.getCurrent();
        if (token instanceof NumberToken) {
            return token.value;
        }
        throw new Error(`Expected a number but found: ${token}`);
    }
}