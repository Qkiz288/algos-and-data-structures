module.exports.Node = class Node {
    constructor(val, priority, version) {
        this.val = val;
        this.priority = priority;
        this.history = [];
        this.history.push(version);
    }
}