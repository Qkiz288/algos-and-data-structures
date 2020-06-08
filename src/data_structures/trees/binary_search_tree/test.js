const BinarySearchTree = require('./BinarySearchTree').BinarySearchTree;

describe("Binary Search Tree tests", function() {

let tree;

    beforeEach(function() {
        tree = new BinarySearchTree();
    });

    it("Insert 1 item", function() {
        // given
        const value1 = 1;

        // when
        tree.insert(value1);

        // then
        expect(tree.root.value).toBe(value1);
        expect(tree.root.left).toBe(null);
        expect(tree.root.right).toBe(null);
    });

    it("Insert 2 items (right)", function() {
        // given
        const value1 = 1;
        const value2 = 2;

        // when
        tree.insert(value1);
        tree.insert(value2);

        // then
        expect(tree.root.value).toBe(value1);
        expect(tree.root.left).toBe(null);
        expect(tree.root.right.value).toBe(value2);
    });

    it("Insert 2 items (left)", function() {
        // given
        const value1 = 1;
        const value2 = 0;

        // when
        tree.insert(value1);
        tree.insert(value2);

        // then
        expect(tree.root.value).toBe(value1);
        expect(tree.root.left.value).toBe(value2);
        expect(tree.root.right).toBe(null);
    });

    it("Insert multiple distinct items", function() {
        // given
        const value1 = 10;
        const value2 = 6;
        const value3 = 15;
        const value4 = 3;
        const value5 = 8;
        const value6 = 20;

        // when
        tree.insert(value1);
        tree.insert(value2);
        tree.insert(value3);
        tree.insert(value4);
        tree.insert(value5);
        tree.insert(value6);

        // then
        expect(tree.root.value).toBe(value1);
        expect(tree.root.left.value).toBe(value2);
        expect(tree.root.right.value).toBe(value3);
        expect(tree.root.left.left.value).toBe(value4);
        expect(tree.root.left.right.value).toBe(value5);
        expect(tree.root.right.left).toBe(null);
        expect(tree.root.right.right.value).toBe(value6);
    });

    it("Insert multiple items with duplicates", function() {
        // given
        const value1 = 10;
        const value2 = 6;
        const value3 = 15;
        const value4 = 3;
        const value5 = 8;
        const value6 = 20;

        // when
        tree.insert(value1);
        tree.insert(value2);
        tree.insert(value3);
        tree.insert(value4);
        tree.insert(value5);
        tree.insert(value6);
        tree.insert(value1);
        tree.insert(value4);

        // then
        expect(tree.root.value).toBe(value1);
        expect(tree.root.left.value).toBe(value2);
        expect(tree.root.right.value).toBe(value3);
        expect(tree.root.left.left.value).toBe(value4);
        expect(tree.root.left.right.value).toBe(value5);
        expect(tree.root.right.left).toBe(null);
        expect(tree.root.right.right.value).toBe(value6);
        expect(tree.root.count).toBe(2);
        expect(tree.root.left.left.count).toBe(2);
    });
});