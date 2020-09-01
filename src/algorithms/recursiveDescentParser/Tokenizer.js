const NumberToken = require('./tokens/NumberToken').NumberToken;
const PlusToken = require('./tokens/PlusToken').PlusToken;
const MinusToken = require('./tokens/MinusToken').MinusToken;
const MultiplicationToken = require('./tokens/MultiplicationToken').MultiplicationToken;
const DivisionToken = require('./tokens/DivisionToken').DivisionToken;
const OpeningBracketToken = require('./tokens/OpeningBracketToken').OpeningBracketToken;
const ClosingBracketToken = require('./tokens/ClosingBracketToken').ClosingBracketToken;
const DotToken = require('./tokens/DotToken').DotToken;

module.exports.Tokenizer = class Tokenizer {
    constructor(expression) {
        this.tokens = this.tokenize(expression);
        this.currentIndex = -1;
    }

    getCurrent() {
        return this.tokens[this.currentIndex];
    }

    areThereMoreTokens() {
        return this.currentIndex < this.tokens.length;
    }

    getNext() {
        this.currentIndex = this.currentIndex + 1;
        return this.tokens[this.currentIndex];
    }

    peekNext() {
        return this.tokens[this.currentIndex + 1];
    }

    isNextOfType(type) {
        return this.peekNext() instanceof type;
    }

    tokenize(expression) {
        const tokens = [];
        for (const char of expression) {

            if (char.match("[0-9]+")) {
                const numberToken = new NumberToken(+char);
                tokens.push(numberToken);
            }

            else if (char === "+") {
                const plusToken = new PlusToken();
                tokens.push(plusToken);
            }

            else if (char === "-") {
                const minusToken = new MinusToken();
                tokens.push(minusToken);
            }

            else if (char === "*") {
                const multiplicationToken = new MultiplicationToken();
                tokens.push(multiplicationToken);
            }

            else if (char === "/") {
                const divisionToken = new DivisionToken();
                tokens.push(divisionToken);
            }

            else if (char === "(") {
                const openingBracketToken = new OpeningBracketToken();
                tokens.push(openingBracketToken);
            }

            else if (char === ")") {
                const closingBracketToken = new ClosingBracketToken();
                tokens.push(closingBracketToken);
            }

            else if (char === ".") {
                const dotToken = new DotToken(".");
                tokens.push(dotToken);
            }

            else {
                throw Error(`Unknown token: ${char}`);
            }
        }

        return tokens;
    }
}