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

    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, value) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(value);
        }
        if (index === this.length) {
            return !!this.push(value);
        }

        var newNode = new Node(value);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.shift(value);
        }
        if (index === this.length - 1) {
            return !!this.pop(value);
        }

        var foundNode = this.get(index);

        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;

        foundNode.prev = null;
        foundNode.next = null;
        this.length--;
        return foundNode;
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

list.shift();

console.log("Shift List Data: 1:  \n", list);

list.shift();

console.log("Shift List Data: 2: \n", list);

list.push("Hi i am First Pushed.");
list.push("Hi i am Second Pushed.");
list.push("Hi i am Third Pushed.");
list.push("Hi i am Fourth Pushed.");

console.log("Getter From Lists: ");

console.log(list.get(2));
console.log(list.get(0));
console.log(list.get(3));
console.log(list.get(5));

