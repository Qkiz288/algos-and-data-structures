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

    it("Find in empty tree", function() {
        // given
        const searchVal = 10;

        // when
        const result = tree.find(searchVal);

        // then
        expect(result).toBe(false);
    });

    it("True find in tree with duplicates", function() {
        // given
        initializeWithDuplicates(tree);
        const searchVal1 = 10;
        const searchVal2 = 6;
        const searchVal3 = 15;
        const searchVal4 = 3;
        const searchVal5 = 8;
        const searchVal6 = 20;

        // when
        const result1 = tree.find(searchVal1);
        const result2 = tree.find(searchVal2);
        const result3 = tree.find(searchVal3);
        const result4 = tree.find(searchVal4);
        const result5 = tree.find(searchVal5);
        const result6 = tree.find(searchVal6);

        // then
        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
        expect(result4).toBe(true);
        expect(result5).toBe(true);
        expect(result6).toBe(true);
    });

    it("False find in tree with duplicates", function() {
        // given
        initializeWithDuplicates(tree);
        const searchVal1 = 11;
        const searchVal2 = 7;
        const searchVal3 = 16;
        const searchVal4 = 4;
        const searchVal5 = 9;
        const searchVal6 = 21;

        // when
        const result1 = tree.find(searchVal1);
        const result2 = tree.find(searchVal2);
        const result3 = tree.find(searchVal3);
        const result4 = tree.find(searchVal4);
        const result5 = tree.find(searchVal5);
        const result6 = tree.find(searchVal6);

        // then
        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
        expect(result4).toBe(false);
        expect(result5).toBe(false);
        expect(result6).toBe(false);
    });

    it("Breadth First Search test", function() {
        // given
        initializeWithDuplicates(tree);

        // when
        const result = tree.breadthFirstSearch();

        // then
        expect(result.length).toBe(6);
        expect(result).toEqual([10, 6, 15, 3, 8, 20]);
    });

    it("Depth First Search Pre Order test", function() {
        // given
        initializeWithDuplicates(tree);

        // when
        const result = tree.depthFirstSearchPreOrder();

        // then
        expect(result.length).toBe(6);
        expect(result).toEqual([10, 6, 3, 8, 15, 20]);
    });
});

function initializeWithDuplicates(tree) {
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
}