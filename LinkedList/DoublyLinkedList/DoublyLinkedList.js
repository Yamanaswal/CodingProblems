const Node = require("./Node.js");

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

}


var list = new DoublyLinkedList();

list.push("Hi i am First Pushed.");
list.push("Hi i am Second Pushed.");
list.push("Hi i am Third Pushed.");
list.push("Hi i am Fourth Pushed.");

console.log("Pushed List Data: \n", list);

console.log(list.pop());
console.log(list.pop());

console.log("Poped List Data: \n", list);


