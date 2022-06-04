/*
 Pick Any element as pivot (First,Last and Middle).
 - Pivot => It is point where all small element is left side and greater element in right side.
 - Store Pivot (First Element) , Current Index Position = 0
 - start index = 0, last index = size - 1 (Defaults)
 - Loop Through - Swap Places and increment pivot if greater than pivot.
 */

function pivot(arr, start = 0, end = arr.length) {

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let pivotIndex = start;

    for (let index = start + 1; index < end; index++) {
        if (pivot > arr[index]) {
            pivotIndex++;
            swap(arr, pivotIndex, index);
        }
    }

    swap(arr, start, pivotIndex)
    // console.log(arr);
    return pivotIndex;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // output: 3
console.log(pivot([3, 2, 1])); // output: 3



function quickSort(arr, left = 0, right = arr.length) {

    if (left < right) {
        let pivotPos = pivot(arr, left, right);

        //left side
        quickSort(arr, left, pivotPos);

        //right side
        quickSort(arr, pivotPos + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));