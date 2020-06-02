const Stack = require('./Stack').Stack;

describe("Stack tests", function() {

    let stack;

    beforeEach(function() {
        stack = new Stack();
    });

    it("Push 1 item", function() {
        // given
        const item1 = "A";

        // when
        stack.push(item1);

        // then
        expect(stack.first).toEqual(stack.last);
        expect(stack.first.val).toBe(item1);
        expect(stack.last.val).toBe(item1);
        expect(stack.length).toBe(1);
        expect(stack.first.next).toBe(null);
        expect(stack.last.next).toBe(null);
    });

    it("Push 2 items", function() {
        // given
        const item1 = "A";
        const item2 = "B";

        // when
        stack.push(item1);
        stack.push(item2);

        // then
        expect(stack.first.next).toEqual(stack.last);
        expect(stack.first.val).toBe(item2);
        expect(stack.last.val).toBe(item1);
        expect(stack.length).toBe(2);
        expect(stack.last.next).toBe(null);
    });

    it("Pop from empty", function() {
        // given

        // when
        const popped = stack.pop();

        // then
        expect(stack.length).toBe(0);
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
        expect(popped).toBe(null);
    });

    it("Pop 1 item until empty", function() {
        // given
        const numOfItems = 1;
        initialize(stack, numOfItems);
        const expected = stack.first.val;

        // when
        const popped = stack.pop();

        // then
        expect(stack.length).toBe(0);
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
        expect(popped).toEqual(expected);
    });

    it("Pop 2 items until empty", function() {
        // given
        const numOfItems = 2;
        initialize(stack, numOfItems);
        const expected1 = stack.first.val;
        const expected2 = stack.last.val;

        // when
        const popped1 = stack.pop();
        const popped2 = stack.pop();

        // then
        expect(stack.length).toBe(0);
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
        expect(popped1).toEqual(expected1);
        expect(popped2).toEqual(expected2);
    });

    it("Pop until 1 item", function() {
        // given
        const numOfItems = 2;
        initialize(stack, numOfItems);
        const expectedFirstAndLast = stack.last;
        const expectedPopped = stack.first.val;

        // when
        const popped = stack.pop();

        // then
        expect(stack.length).toBe(1);
        expect(stack.first).toEqual(expectedFirstAndLast)
        expect(stack.last).toEqual(expectedFirstAndLast);
        expect(popped).toEqual(expectedPopped);
    });

    it("Pop until 2 items", function() {
        // given
        const numOfItems = 3;
        initialize(stack, numOfItems);
        const expectedPopped = stack.first.val;

        // when
        const popped = stack.pop();

        // then
        expect(stack.length).toBe(2);
        expect(stack.first.next).toEqual(stack.last);
        expect(stack.last.next).toBe(null);
        expect(popped).toEqual(expectedPopped);
    });

});

function initialize(stack, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        stack.push(i);
    }
}