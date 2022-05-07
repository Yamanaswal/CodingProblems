
// Binary Search - Works Sorted Data Only

// e.g. [1,2,3,4,5,6,7,8,9,10] find = 8

// Original Solution
function binarySearchOriginal(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearchRefactored(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// Binary Smaller Version.
function binarySearch(arr, elem) {

    // arr = [1,2,3,4,5,6,7,8]
    // find = 4
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (start <= end) {
        if (arr[middle] === elem) {
            return middle;
        }
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    return -1;
}


console.log("Binary Search");
console.log(binarySearchOriginal([2, 5, 6, 9, 13, 15, 28, 30], 15));
console.log(binarySearchRefactored([2, 5, 6, 9, 13, 15, 28, 30], 10));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9));

