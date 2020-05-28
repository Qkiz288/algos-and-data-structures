const SinglyLinkedList = require('./SinglyLinkedList').SinglyLinkedList;

describe("Singly linked list tests", function() {
    let list;

    beforeEach(function() {
        list = new SinglyLinkedList();
    });

    it("Push 1 item", function() {
        // given
        const head = "A";
        const tail = head

        // when
        list.push(head);

        // then
        expect(list.length).toBe(1);
        expect(list.head.val).toEqual(head);
        expect(list.tail.val).toEqual(tail);
    });

    it("Push 2 items", function() {
        // given
        const head = "A";
        const tail = "B";

        // when
        list.push(head);
        list.push(tail);

        // then
        expect(list.length).toBe(2);
        expect(list.head.val).toBe(head);
        expect(list.tail.val).toBe(tail);
        expect(list.head.next).toEqual(list.tail);
    });

    it("Pop until empty", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
    
        // when
        for (let i = 0; i < numOfItems; i++) {
            list.pop();
        }

        // then
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    it("Pop until one element", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);

        // when
        for (let i = 0; i < numOfItems - 1; i++) {
            list.pop();
        }

        // then
        expect(list.length).toBe(1);
        expect(list.head).toEqual(list.tail);
        expect(list.head.next).toBe(null);
    });

    it("Shift until empty", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);
        const head = list.tail;

        // when
        let lastShifted;
        for (let i = 0; i < numOfItems; i++) {
            lastShifted = list.shift();
        }

        // then
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(lastShifted).toEqual(head);
    });

    it("Shift until one element", function() {
        // given
        const numOfItems = 2;
        initialize(list, numOfItems);

        // when
        let lastShifted;
        for (let i = 0; i < numOfItems - 1; i++) {
            list.shift();
        }

        // then
        expect(list.length).toBe(1);
        expect(list.head).toEqual(list.tail);
        expect(list.head.next).toBe(null);
    });

    it("Unshift until one element", function() {
        // given
        const val = "A";

        // when
        list.unshift(val);

        // then
        expect(list.length).toBe(1);
        expect(list.head).toEqual(list.tail);
        expect(list.head.next).toBe(null);
        expect(list.head.val).toBe(val);
    });

    it("Unshift 2 items", function() {
        // given
        const val1 = "A";
        const val2 = "B";

        // when
        list.unshift(val1);
        list.unshift(val2);

        // then
        expect(list.length).toBe(2);
        expect(list.head.val).toBe(val2);
        expect(list.tail.val).toBe(val1);
        expect(list.head.val).toBe(val2);
        expect(list.tail.val).toBe(val1);
        expect(list.head.next).toEqual(list.tail);
    });

    it("Valid get", function() {
        // given
        let numOfItems = 3;
        initialize(list, numOfItems);

        // when
        const firstItem = list.get(0);
        const middleItem = list.get(Math.floor(numOfItems / 2));
        const LastItem = list.get(numOfItems - 1);
        
        // then
        expect(firstItem).not.toBe(undefined);
        expect(middleItem).not.toBe(undefined);
        expect(LastItem).not.toBe(undefined);
        expect(list.length).toBe(numOfItems);
    });

    it("Invalid get", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);

        // when
        const invalid1 = list.get(numOfItems);
        const invalid2 = list.get(-1);
        
        // then
        expect(invalid1).toBe(undefined);
        expect(invalid2).toBe(undefined);
        expect(list.length).toBe(numOfItems);
    });

    it("Valid set", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const newValue1 = "A";
        const newValue2 = "B";
        const firstIndex = 0;
        const lastIndex = numOfItems - 1;

        // when
        const result1 = list.set(firstIndex, newValue1);
        const result2 = list.set(lastIndex, newValue2);
        
        // then
        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(list.head.val).toBe(newValue1);
        expect(list.head.next).toEqual(list.get(firstIndex + 1));
        expect(list.tail.val).toBe(newValue2);
        expect(list.tail.next).toBe(null);
        expect(list.length).toBe(numOfItems);
    });

    it("Invalid set", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const newValue1 = "A";
        const newValue2 = "B";
        const invalidIndex1 = -1;
        const invalidIndex2 = numOfItems;

        // when
        const result1 = list.set(invalidIndex1, newValue1);
        const result2 = list.set(invalidIndex2, newValue2);
        
        // then
        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(list.length).toBe(numOfItems);
    });

    it("Insert in the beginning", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const newValue = "A";
        const firstIndex = 0;

        // when
        const result = list.insert(firstIndex, newValue);
        
        // then
        expect(result).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
        expect(list.head.val).toBe(newValue);
    });

    it("Insert in the beginning", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const newValue = "A";
        const index = Math.floor(numOfItems / 2);

        // when
        const result = list.insert(index, newValue);
        
        // then
        expect(result).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
    });

    it("Insert in the end", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const newValue = "A";
        const index = numOfItems;

        // when
        const result = list.insert(index, newValue);
        
        // then
        expect(result).toBe(true);
        expect(list.length).toBe(numOfItems + 1);
        expect(list.tail.val).toEqual(newValue);
    });

    it("Invalid inserts", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const newValue1 = "A";
        const newValue2 = "B";
        const invalidIndex1 = -1;
        const invalidIndex2 = numOfItems + 1;

        // when
        const result1 = list.insert(invalidIndex1, newValue1);
        const result2 = list.insert(invalidIndex2, newValue2);
        
        // then
        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(list.length).toBe(numOfItems);
    });


    it("Remove in the beginning", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const firstIndex = 0;
        const firstItem = list.head;

        // when
        const removed = list.remove(firstIndex);
        
        // then
        expect(removed).toEqual(firstItem);
        expect(list.length).toBe(numOfItems - 1);
    });

    it("Remove in the middle", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const index = Math.floor(numOfItems / 2);

        // when
        const removed = list.remove(index);
        
        // then
        expect(removed).not.toBe(undefined);
        expect(list.length).toBe(numOfItems - 1);
    });

    it("Remove in the end", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const lastIndex = numOfItems - 1;
        const lastItem = list.tail;

        // when
        const removed = list.remove(lastIndex);
        
        // then
        expect(removed).toEqual(lastItem);
        expect(list.length).toBe(numOfItems - 1);
    });

    it("Reverse", function() {
        // given
        const numOfItems = 3;
        initialize(list, numOfItems);
        const compareList = new SinglyLinkedList();
        initialize(compareList, numOfItems);

        // when
        list.reverse();
        
        // then
        for (let i = 0; i < numOfItems; i++) {
            expect(list.get(i).val).toBe(compareList.get(numOfItems - 1 - i).val);
        }
        expect(compareList.length).toBe(list.length);
    });

});

function initialize(list, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        list.push(i);
    }
}