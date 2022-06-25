/// Piece of Data of Linked List.
/// ref to next node -> next = null (initial), prev node -> prev = null (initial)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


module.exports = Node;
