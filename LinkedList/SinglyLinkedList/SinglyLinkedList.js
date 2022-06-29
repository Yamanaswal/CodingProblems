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
    push(value) {
        var node = new Node(value);

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

    /* Pop From End of Linked List.
    1. chech if is empty or not -> return undefined.
    2. take two var previous and current (head node)
    3. traverse whole list till current.next is not null
    4. update tail with previous node which is 2nd last node before current.
    5. case: check if (length === 0), then update (head and tail = null)
    */
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

    traverse() {
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    /* 
     Remove Head From Linked List.
     1. Head will replace from its Next Node.
     2. and check if length === 0 , then set tail to null 
    */
    shift() {
        if (!this.head) {
            return undefined;
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // Add New Node At Head Position.
    unshift(value) {
        var node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        var node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.value);
            current = current.next
        }
        console.log(arr);
    }

}

var list = new SinglyLinkedList();
console.log("------- INIT ---------");
list.push("Hello Guys Welcome..");
list.push("Home Coming..");
list.push("No Way Home.");
list.push("1234567890");
list.push("qwerty");

console.log("------- Added Three Item ---------");

console.log("Print List");
console.log(list);
// console.log(list.head);
// console.log(list.tail);
// console.log(list.head.next);
// console.log("----- POP METHODS ---- ");
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.push("NEW DATA..."));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log("POP ENDED");
// console.log(list);

// console.log("---- SHIFT -----");
// list.shift();
// console.log(list);
// list.unshift("34");
// console.log(list);

// console.log(list.traverse());

console.log("----- GETTER ------");
console.log(list.get(2));
console.log(list.get(-2));
console.log(list.get(200));

console.log("------ SETTER -----");
console.log(list.set(0, "Set New Data..."));
console.log(list);

console.log(list.insert(0, "200"));
console.log(list.remove(3));
console.log(list);


list.print();
list.reverse();
list.print();