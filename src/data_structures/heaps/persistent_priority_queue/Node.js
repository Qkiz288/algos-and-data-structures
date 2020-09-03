module.exports.Node = class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.history = [];
    }
}