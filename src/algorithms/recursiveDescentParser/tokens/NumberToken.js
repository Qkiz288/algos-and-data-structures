const Token = require('./Token').Token;

module.exports.NumberToken = class NumberToken extends Token {
    constructor(val) {
        super();
        this.value = val;
    }
}