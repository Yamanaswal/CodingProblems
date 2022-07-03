class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    //1. Insert it to the end.
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    //2. Bubble Up to Max Value to the Parent from Child.
    bubbleUp() {

        // Last Index And Value.
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) {
                break;
            }

            // Swapped Child With Parent.
            this.values[parentIdx] = element;
            this.values[index] = parent;
            // Update Index to Parent Index.
            index = parentIdx;
        }
    }

    extractMax() {
        // Max At Start        
        let rootMax = this.values.shift();
        let lastValue = this.values.pop();
        this.values.unshift(lastValue);
        this.bubbleDown();

        return rootMax;
    }

    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[index];

        while (true) {
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild, rightChild;
            let swap = null;


            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (swap !== null && rightChild > this.values[leftChildIndex] && rightChild > element) {
                    swap = rightChildIndex;
                }
            }

            // If No Swap - exit loop
            if (swap === null) {
                break;
            }

            // Swap Parent And Larger Value
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

    }

}

console.log("------------ MaxBinaryHeap ------------------");
let heap = new MaxBinaryHeap();


heap.insert(18);
heap.insert(12);
heap.insert(60);
heap.insert(32);
heap.insert(45);
heap.insert(26);
heap.insert(33);
console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

// [55,39,41,18,27,12,33]
// [33,39,41,18,27,12]
// [33,41,39,18,27,12]

