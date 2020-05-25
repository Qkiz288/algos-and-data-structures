module.exports.Node = class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    toString() {
        return this.next === null ? this.val.toString() : `${this.val.toString()} ${this.next.toString()}`;
    }
}