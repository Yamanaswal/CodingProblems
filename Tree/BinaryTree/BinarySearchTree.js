const Node = require("./Node.js");

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {

            // get init -> root node in current.
            var current = this.root;

            while (current) {
                // Smaller than current node.
                if (current.value > newNode.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                }
                // Greater than current node. 
                else if (current.value < newNode.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }

            return this;
        }
    }

    contains(value) {
        if (this.root === null) {
            return false;
        }
        var current = this.root, found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // Horizonatal Level Search (Breadth First Search) 
    BFS() {
        // if root is Null
        if (!this.root) { return [] }

        var node = this.root,
            data = [],
            queue = [];

        // Push to queue - root.
        queue.push(node);

        while (queue.length !== 0) {
            node = queue.shift();
            // Adding to Data List.
            data.push(node);

            // Check if Current Node Have Left And Right - Push to Queue.
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            // For Generic Tree - Queue Adding.
            // for (var key of Object.keys(node)) {
            //     if (key !== "value" && node[key] !== null) {
            //         queue.push(node[key]);
            //     }
            // }

        }
        return data;
    }

    DFSPreOrder() {
        // if root is Null
        if (!this.root) { return [] }

        var data = [];

        function traverse(node) {
            // Push First Node.
            data.push(node.value);

            // Traverse Left And Right Side -> (Push Again on Node -> null)
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        // if root is Null
        if (!this.root) { return [] }

        var data = [];

        function traverse(node) {

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder(){
         // if root is Null
         if (!this.root) { return [] }

         var data = [];
 
         function traverse(node) {
 
             if (node.left) traverse(node.left);
             data.push(node.value);
             if (node.right) traverse(node.right);
 
         }
 
         traverse(this.root);
         return data;
    }

}

//       10
//     6     15 
//   3    8     20

console.log("------------ BST --------------");
var bstTree = new BinarySearchTree();
console.log(bstTree);
console.log(bstTree.insert(20));
console.log(bstTree.insert(40));
console.log(bstTree.insert(10));
console.log(bstTree.insert(40));
console.log(bstTree.insert(12));
console.log(bstTree.insert(20));
console.log("----------  BFS  -------------");
bstTree = new BinarySearchTree();
bstTree.insert(10);
bstTree.insert(6);
bstTree.insert(15);
bstTree.insert(3);
bstTree.insert(8);
bstTree.insert(20);
console.log(bstTree.BFS());
console.log("----------  DFS - PreOrder ---------------");

console.log("PreOrder: " + bstTree.DFSPreOrder());
console.log("PostOrder: " + bstTree.DFSPostOrder());
console.log("InOrder: " + bstTree.DFSInOrder());
