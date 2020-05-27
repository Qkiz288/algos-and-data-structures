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
        expect(list.head.val).toBe(head);
        expect(list.tail.val).toBe(tail);
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
        expect(list.head.next).toBe(list.tail);
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
        expect(list.head).toBe(list.tail);
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
        expect(list.head).toBe(list.tail);
        expect(list.head.next).toEqual(null);
    });
});

// console.log("--- UNSHIFT ---")
// console.log(list.unshift("!").toString());
// console.log(list.unshift("again").toString());
// console.log(list.unshift("Hello").toString());

// console.log("--- GET ---");
// console.log(list.get(3));
// console.log(list.get(2));
// console.log(list.get(1));
// console.log(list.get(0));
// console.log(list.get(-1));

// console.log("--- SET ---");
// console.log(list.set(0, "Welcome"));
// console.log(list.toString());
// console.log(list.set(-1, "Invalid"));
// console.log(list.set(3, "Invalid"));
// console.log(list.set(2, "!!!"));
// console.log(list.toString());

// console.log("--- INSERT ---")
// console.log(list.insert(-1, "Invalid"));
// console.log(list.insert(4, "Invalid"));
// console.log(list.insert(0, "Big"));
// console.log(list.toString());
// console.log(list.insert(4, "!"));
// console.log(list.toString());
// console.log(list.insert(3, "my friend"));
// console.log(list.toString());

// console.log("--- REMOVE ---");
// console.log(list.remove(-1));
// console.log(list.remove(6));
// console.log(list.remove(0));
// console.log(list.toString());
// console.log(list.remove(4));
// console.log(list.toString());

// console.log("--- REVERSE ---")
// console.log(list.reverse().toString());

// function pushData(list) {
//     list.push("Hello");
//     list.push("linked");
//     list.push("list");
//     list.push("!");
// }

function initialize(list, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        list.push(i);
    }
}