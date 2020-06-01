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
    });

    it("Set on empty list", function() {
        // given
        const value1 = "A";

        // when
        const result1 = list.set(0, value1);

        // then
        expect(result1).toBe(false);
    });

    it("Invalid set", function() {
        // given
        const value1 = "A";
        const value2 = "B";
        const numOfItems = 2;
        initialize(list, numOfItems);


        // when
        const result1 = list.set(-1, value1);
        const result2 = list.set(numOfItems, value2);

        // then
        expect(result1).toBe(false);
        expect(result2).toBe(false);
    });

    it("Set on 1 item list", function() {
        // given
        const value1 = "A";
        const numOfItems = 1;
        initialize(list, numOfItems);

        // when
        const result1 = list.set(0, value1);

        // then
        expect(result1).toBe(true);
        expect(list.head).toEqual(list.tail);
        expect(list.head.next).toBe(null);
        expect(list.head.prev).toBe(null);
        expect(list.tail.next).toBe(null);
        expect(list.tail.prev).toBe(null);
        expect(list.length).toBe(numOfItems);
    });

    it("Set on 2 item list", function() {
        // given
        const value1 = "A";
        const value2 = "B";
        const numOfItems = 2;
        initialize(list, numOfItems);

        // when
        const result1 = list.set(0, value1);
        const result2 = list.set(1, value2);

        // then
        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(list.length).toBe(numOfItems);
        expect(list.head.next).toEqual(list.tail);
        expect(list.head.prev).toBe(null);
        expect(list.tail.prev).toEqual(list.head);
        expect(list.tail.next).toBe(null);
    });

    it("Invalid insert", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const value1 = "A";
        const invalidIndex1 = -1;
        const value2 = "B";
        const invalidIndex2 = numOfItems + 1;
        
        // when
        const result1 = list.insert(invalidIndex1, value1);
        const result2 = list.insert(invalidIndex2, value2);

        // then
        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(list.length).toBe(numOfItems);
        expect(list.head.next).toEqual(list.tail);
        expect(list.head.prev).toBe(null);
        expect(list.tail.prev).toEqual(list.head);
        expect(list.tail.next).toBe(null);
    });

    it("Insert on the head", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const value1 = "A";
        const index = 0;
        const oldHeadVal = list.head.val;
        
        // when
        const result1 = list.insert(index, value1);

        // then
        expect(result1).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
        expect(list.head.prev).toBe(null);
        expect(list.head.val).toBe(value1);
        expect(list.head.next.val).toBe(oldHeadVal);
    });

    it("Insert after the tail", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const value1 = "A";
        const index = numOfItems;
        const oldTailVal = list.tail.val;
        
        // when
        const result1 = list.insert(index, value1);

        // then
        expect(result1).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
        expect(list.tail.val).toBe(value1);
        expect(list.tail.next).toBe(null);
        expect(list.tail.prev.val).toBe(oldTailVal);
    });

    it("Insert on the tail", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const value1 = "A";
        const index = numOfItems - 1;
        const tailVal = list.tail.val;
        
        // when
        const result1 = list.insert(index, value1);

        // then
        expect(result1).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
        expect(list.tail.val).toBe(tailVal);
        expect(list.tail.prev.val).toBe(value1);
        expect(list.tail.next).toBe(null);
    });

    it("Insert after the head", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const value1 = "A";
        const index = 1;
        
        // when
        const result1 = list.insert(index, value1);

        // then
        expect(result1).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
        expect(list.head.next.val).toBe(value1);
    });

    it("Invalid remove", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const invalidIndex1 = -1;
        const invalidIndex2 = numOfItems;
        
        // when
        const result1 = list.remove(invalidIndex1);
        const result2 = list.remove(invalidIndex2);

        // then
        expect(result1).toBe(undefined);
        expect(result2).toBe(undefined);
        expect(list.length).toBe(numOfItems);
    });

    it("Remove from the head", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const expectedVal = list.head.val;
        const expectedNewHeadVal = list.head.next.val;
        
        // when
        const result1 = list.remove(0);

        // then
        expect(result1.val).toBe(expectedVal);
        expect(result1.next).toBe(null);
        expect(result1.prev).toBe(null);
        expect(list.length).toBe(numOfItems - 1);
        expect(list.head.val).toBe(expectedNewHeadVal);
    });

    it("Remove from the tail", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const expectedVal = list.tail.val;
        const expectedNewTailVal = list.tail.prev.val;
        
        // when
        const result1 = list.remove(numOfItems - 1);

        // then
        expect(result1.val).toBe(expectedVal);
        expect(result1.next).toBe(null);
        expect(result1.prev).toBe(null);
        expect(list.length).toBe(numOfItems - 1);
        expect(list.head.val).toBe(expectedNewTailVal);
    });

    it("Remove from the middle", function() {
        // given
        const numOfItems = 9;
        initialize(list, numOfItems);
        const index = Math.floor(numOfItems / 2);
        
        // when
        const result1 = list.remove(index);

        // then
        expect(result1).toBeTruthy();
        expect(result1.next).toBe(null);
        expect(result1.prev).toBe(null);
        expect(list.length).toBe(numOfItems - 1);
    });

    it("Reverse empty", function() {
        // given
        
        // when
        list.reverse();

        // then
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Reverse 1 item", function() {
        // given
        const numOfItems = 1;
        initialize(list, numOfItems);
        
        // when
        const reversed = list.reverse();

        // then
        expect(list.length).toBe(numOfItems);
        expect(list.head).toEqual(list.tail);
    });

    it("Reverse 2 items", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const oldHeadVal = list.head.val;
        const oldTailVal = list.tail.val;
        
        // when
        const reversed = list.reverse();

        // then
        expect(list.length).toBe(numOfItems);
        expect(list.head.val).toBe(oldTailVal);
        expect(list.tail.val).toBe(oldHeadVal);
        expect(list.head.next).toEqual(list.tail);
        expect(list.tail.prev).toEqual(list.head);
    });

    it("Reverse multiple items", function() {
        // given
        const numOfItems = 9;
        initialize(list, numOfItems);
        const oldHeadVal = list.head.val;
        const oldTailVal = list.tail.val;
        
        // when
        list.reverse();

        // then
        expect(list.length).toBe(numOfItems);
        expect(list.head.val).toBe(oldTailVal);
        expect(list.tail.val).toBe(oldHeadVal);
        expect(list.head.val).toBe(oldTailVal);
        expect(list.tail.val).toBe(oldHeadVal);
        expect(list.head.prev).toBe(null);
        expect(list.head.next).not.toBe(null);
        expect(list.tail.prev).not.toBe(null);
    });

})

function initialize(list, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        list.push(i);
    }
}