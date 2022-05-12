
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSortUnOptimized(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

    }
  }
  return arr;
}

console.log("UNOPTIMIZED VERSION OF BUBBLE SORT:  ");
console.log(bubbleSortUnOptimized([8, 1, 2, 3, 4, 5, 6, 7]));


// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log("ES2015 Version: ");
console.log(bubbleSort([8, 1, 2, 4, 3, 5, 7, 6]));



// Optimized BubbleSort with noSwaps - Break Swapping when array is already sorted.
function bubbleSort(arr) {
  var noSwaps;

  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break
    };

  }

  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));