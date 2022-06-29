const Node = require("./Node.js");

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        var node = new Node(value);

        if (!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        return this.size++;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        else {
            var temp = this.first;
            if (this.size === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }
        }
        this.size--;
        return temp.value;
    }
}

console.log("----------- Push in Queue: ----- ");
var queue = new Queue();
queue.enqueue("10");
queue.enqueue("11");
queue.enqueue("12");
queue.enqueue("13");
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);