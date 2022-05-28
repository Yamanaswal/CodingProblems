

// Merge Two Sorted Arrays.
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }

    console.log("Results 1: " + results);


    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    console.log("Results 2: " + results);
    return results;
}


console.log("Merge Array: " + merge([1, 10, 50], [2, 14, 99, 100]));
console.log("Merge Array: " + merge([1, 10, 50], []));
console.log("Merge Array: " + merge([], [2, 14, 99, 100]));
console.log("Merge Array: " + merge([100], [2, 14, 99, 100]));


// Merge Sort.
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, middle));
    let arr2 = mergeSort(arr.slice(middle, arr.length));
    return merge(arr1, arr2);
}


console.log("Merge Sorted Array: " + mergeSort([10, 24, 76, 73, 72, 1, 9]));
console.log("Merge Sorted Array: " + mergeSort([100, 240, 76, 73, 72, 1, 23, 0, -2, 9]));


