module.exports.Node = class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}