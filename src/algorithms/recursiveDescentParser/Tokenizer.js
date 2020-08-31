const NumberToken = require('./tokens/NumberToken').NumberToken;
const PlusToken = require('./tokens/PlusToken').PlusToken;
const MinusToken = require('./tokens/MinusToken').MinusToken;

module.exports.Tokenizer = class Tokenizer {
    constructor(expression) {
        this.tokens = this.tokenize(expression);
        this.currIdx = 0;
    }

    moveForward() {
        this.currIdx += 1;
    }

    getNext() {
        this.currIdx += 1;
        return this.tokens[this.currIdx];
    }

    getCurrent() {
        return this.tokens[this.currIdx];
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

            else {
                throw Error(`Unknown token: ${char}`);
            }
        }

        return tokens;
    }
}