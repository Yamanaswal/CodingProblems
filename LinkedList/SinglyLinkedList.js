const Node = require("./Node.js");
///* SIngly Linked List - Base Class.
////

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Push to Linked List.
    1. Create a New Node First.
    2. check if head is null or not. if(null) ->(set head and tail to new Node.)
    3. otherwise -> 
    */
    push(val) {
        var node = new Node(val);

        console.log(node);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    traverse() {
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    pop() {
        if (this.head === null) {
            return undefined;
        }
        var current = this.head;
        let pre = this.head;
        while (current.next !== null) {
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

}

var list = new SinglyLinkedList();
list.pop();
list.push("Hello Guys Welcome..");
list.push("Home Coming..");
list.push("No Way Home.");
console.log(list);
console.log(list.head);
console.log(list.tail);
console.log(list.head.next);
console.log("PUSH METHODS ENDED");
console.log(list.pop());
console.log(list.pop());
console.log(list.push("NEW DATA..."));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list);

// console.log(list.traverse());