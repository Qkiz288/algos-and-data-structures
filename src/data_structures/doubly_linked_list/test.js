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

})

function initialize(list, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        list.push(i);
    }
}