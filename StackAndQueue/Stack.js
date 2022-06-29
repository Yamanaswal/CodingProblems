const Node = require("./Node.js");

class Stack {

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        var newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return this.size++;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        else {
            var node = this.first;

            if (this.size === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }

            this.size--;
            return node.value;
        }
    }

}


console.log("----------- Add Some Data in Stack: --------");
var stack = new Stack();
stack.push("First");
stack.push("Second");
stack.push("Third");
console.log(stack);
console.log("------ Pop Items: ----");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);