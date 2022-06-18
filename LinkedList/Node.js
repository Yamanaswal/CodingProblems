/// Piece of Data of Linked List.
/// ref to next node -> next = null (initial)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


module.exports = Node;

// var first = new Node("Hi");
// first.next = new Node("Bro");
// first.next.next = new Node("Wrong Node");
// first.next.next = new Node("Right Node");

// console.log(first);