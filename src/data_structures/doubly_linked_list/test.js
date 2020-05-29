const DoublyLinkedList = require('./DoublyLinkedList').DoublyLinkedList;

describe("Doubly linked list tests", function() {
    let list;

    beforeEach(function() {
        list = new DoublyLinkedList();
    }); 

    it("Push 1 item", function() {
        // given

        // when
        list.push("A");

        // then
        expect(list.length).toBe(1);
        expect(list.head).toEqual(list.tail);
        expect(list.tail.next).toBe(null);
        expect(list.head.prev).toBe(null);
    });

    it("Push 2 items", function() {
        // given

        // when
        list.push("A");
        list.push("B");

        // then
        expect(list.length).toBe(2);
        expect(list.head.next).toEqual(list.tail);
        expect(list.tail.prev).toEqual(list.head);
        expect(list.head.prev).toBe(null);
        expect(list.tail.next).toBe(null);
    });

    it("Pop from empty", function() {
        // given

        // when
        const popped = list.pop();

        // then
        expect(popped).toEqual(undefined);
    });

    it("Pop 1 item until empty", function() {
        // given
        const numOfItems = 1;
        initialize(list, numOfItems);

        // when
        list.pop();

        // then
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Pop 2 items until empty", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);

        // when
        list.pop();
        list.pop();

        // then
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Pop item until 2 items", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);

        // when
        const popped = list.pop();

        // then
        expect(popped.prev).toBe(null);
        expect(popped.next).toBe(null);
        expect(list.length).toBe(2);
        expect(list.head.next).toBe(list.tail);
        expect(list.tail.prev).toBe(list.head);
        expect(list.tail.next).toBe(null);
    });

    it("Shift from empty empty", function() {
        // given

        // when
        const shifted = list.shift();

        // then
        expect(shifted).toBe(undefined);
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Shift 1 item until empty", function() {
        // given
        const numOfItems = 1;
        initialize(list, numOfItems);
        const expectedVal = list.head.val;

        // when
        const shifted = list.shift();

        // then
        expect(shifted.val).toBe(expectedVal);
        expect(shifted.next).toBe(null);
        expect(shifted.prev).toBe(null);
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Shift 2 items until empty", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const expectedVal1 = list.head.val;
        const expectedVal2 = list.tail.val;

        // when
        const shifted1 = list.shift();
        const shifted2 = list.shift();

        // then
        expect(shifted1.val).toBe(expectedVal1);
        expect(shifted1.next).toBe(null);
        expect(shifted1.prev).toBe(null);
        expect(shifted2.val).toBe(expectedVal2);
        expect(shifted2.next).toBe(null);
        expect(shifted2.prev).toBe(null);
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Shift until 1 item", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const expectedVal = list.head.val;

        // when
        const shifted = list.shift();

        // then
        expect(shifted.val).toBe(expectedVal);
        expect(shifted.next).toBe(null);
        expect(shifted.prev).toBe(null);
        expect(list.length).toBe(1);
        expect(list.head.prev).toBe(null);
        expect(list.tail.next).toBe(null);
    });

    it("Shift until 2 items", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const expectedVal = list.head.val;

        // when
        const shifted = list.shift();

        // then
        expect(shifted.val).toBe(expectedVal);
        expect(shifted.next).toBe(null);
        expect(shifted.prev).toBe(null);
        expect(list.length).toBe(2);
        expect(list.head.prev).toBe(null);
        expect(list.head.next).toBe(list.tail);
        expect(list.tail.next).toBe(null);
        expect(list.tail.prev).toBe(list.head);
    });

    it("Unshift 1 item into empty", function() {
        // given
        const expectedValue = "A";

        // when
        list.unshift(expectedValue);

        // then
        expect(list.length).toBe(1);
        expect(list.head.val).toBe(expectedValue);
        expect(list.tail.val).toBe(expectedValue);
        expect(list.head.prev).toBe(null);
        expect(list.tail.next).toBe(null);
        expect(list.head).toEqual(list.tail);
    });

    it("Unshift 2 items into empty", function() {
        // given
        const expectedValue1 = "A";
        const expectedValue2 = "B";

        // when
        list.unshift(expectedValue1);
        list.unshift(expectedValue2);

        // then
        expect(list.length).toBe(2);
        expect(list.head.val).toBe(expectedValue2);
        expect(list.tail.val).toBe(expectedValue1);
        expect(list.head.prev).toBe(null);
        expect(list.head.next).toBe(list.tail);
        expect(list.tail.next).toBe(null);
        expect(list.tail.prev).toBe(list.head);
    });

    it("Invalid get", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const invalidIndex1 = -1;
        const invalidIndex2 = numOfItems;

        // when
        const item1 = list.get(invalidIndex1);
        const item2 = list.get(invalidIndex2);

        // then
        expect(list.length).toBe(numOfItems);
        expect(item1).toBe(undefined);
        expect(item2).toBe(undefined);
    });

    it("Get first item", function() {
        // given
        const numOfItems = 9;
        initialize(list, numOfItems);

        // when
        const item = list.get(0);

        // then
        expect(list.length).toBe(numOfItems);
        expect(item.val).toBe(list.head.val);
        expect(item.next).toBe(null);
        expect(item.prev).toBe(null);
    });

    it("Get item from first half", function() {
        // given
        const numOfItems = 9;
        initialize(list, numOfItems);
        const firstHalfIndex = Math.floor(numOfItems / 4);
        const expectedValue = firstHalfIndex;

        // when
        const item = list.get(firstHalfIndex);

        // then
        expect(list.length).toBe(numOfItems);
        expect(item).not.toBe(undefined);
        expect(item.val).toBe(expectedValue);
        expect(item.next).toBe(null);
        expect(item.prev).toBe(null);
    });

    it("Get last item", function() {
        // given
        const numOfItems = 9;
        initialize(list, numOfItems);

        // when
        const item = list.get(numOfItems - 1);

        // then
        expect(list.length).toBe(numOfItems);
        expect(item.val).toBe(list.tail.val);
        expect(item.next).toBe(null);
        expect(item.prev).toBe(null);
    });

    it("Get item from second item", function() {
        // given
        const numOfItems = 9;
        initialize(list, numOfItems);
        const secondHalfIndex = Math.floor(3 * numOfItems / 4);
        const expectedValue = secondHalfIndex;

        // when
        const item = list.get(secondHalfIndex);

        // then
        expect(list.length).toBe(numOfItems);
        expect(item).not.toBe(undefined);
        expect(item.val).toBe(expectedValue);
        expect(item.next).toBe(null);
        expect(item.prev).toBe(null);
    });

})

function initialize(list, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        list.push(i);
    }
}