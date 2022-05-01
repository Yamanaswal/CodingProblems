/*
    Frequency Counter Pattern
 */

// Question 1: Write a function, which takes two arrays, and return true 
// if corresponding value is squared in another array position. (must be same frequency.)
// e.g. a[2,3,4]  & b[4,9,16] , output: true 
// e.g. a[2,3,4]  & b[9,16,4] , output: true
// e.g. a[2,3,4]  & b[4,9,8] , output: false
// e.g. a[2,3,4]  & b[4,9] , output: false (not in same frequency)

function sameArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyArr1 = {};
    let frequencyArr2 = {};

    for (const value of arr1) {
        frequencyArr1[value] = (frequencyArr1[value] || 0) + 1
    }

    for (const value of arr2) {
        frequencyArr2[value] = (frequencyArr2[value] || 0) + 1
    }

    console.log(frequencyArr1);
    console.log(frequencyArr2);

    for (const key in frequencyArr1) {
        if (!(key ** 2 in frequencyArr2)) {
            return false;
        }
        if (frequencyArr1[key] !== frequencyArr2[key ** 2]) {
            return false;
        }
    }

    return true;
}



console.log(sameArray([1, 2, 3, 2, 6], [9, 1, 36, 4, 4]));
console.log(sameArray([1, 2, 3, 2], [9, 1, 4, 5]));



/* Question 2: Anagram of Two Strings. 
   e.g. aaz & zza is not Anagram - false
   e.g. aaz & zaa is a Anagram - true
   e.g. " x z" & "z x " is Anagram - true
*/


function validateAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for (const value of str1) {
        lookup[value] = (lookup[value] || 0) + 1
    }

    console.log(lookup);
    console.log(str1);
    console.log(str2);

    for (const value of str2) {
        if (!lookup[value]) {
            return false;
        } else {
            lookup[value] -= 1
        }
    }
    return true;
}

console.log(validateAnagram("hello", "llohe"));
console.log(validateAnagram("hello", "llohse"));



/*
    Multiple Pointer Approach.
 */

// Question 1: Find the sum of zero in given array (e.g. 4 + -4 = 0)
// Note: Array is Sorted and can be negative and positive numbers.

function sumZero(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === 0) {
            return [arr[start], arr[end]];
        }
        else if (sum > 0) {
            end--;
        }
        else {
            start++;
        }
    }
    return "No Pair Found";
}


console.log("SumZero :" + sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));




// Question 2: Create a function which accepts sorted array counts unique values in it.
// e.g. [1,2,4,3,4,5,7,8,7] , output: 7
// e.g. [ ] , output: 0 


// Approach - 1
function countUniqueValuesCountVar(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var i = 0;
    var count = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            count++;
            i = j;
        }
    }
    return count + 1;
}


// Approach - 2 - TWO POINTERS
function countUniqueValuesPointerWay(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log("Unique Count: " + countUniqueValuesCountVar([1, 2, 2, 3, 4, 4, 5, 7]));
console.log("Unique Count: " + countUniqueValuesPointerWay([1, 2, 2, 5, 7, 7, 99]));




/* 
SLiding Window Problem 
*/

// Question 1: Find Max Sum of n no of subarray in a large array.
// e.g. [2,3,1,3,4,5,6] n = 3 , output: 15

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log("Max Value: " + maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 6, 9, 2, 1, 8, 3], 3));


// Question 2: Find longest subsquence it array.



/* Divide and Conquer Algo */
// e.g. binary search

// Question 1: Given a sorted array , it return search value if not found = -1
// e.g. arr = [1,3,4,5,6,7,8] , find = 6 output: 4th position

// Using Binary Search

function binarySearch(arr, num) {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {

        let middle = Math.floor((min + max) / 2);
        let middleValue = arr[middle];

        if (middleValue > num) {
            max = middle - 1;
        }

        else if (middleValue < num) {
            min = middle + 1;
        }

        else {
            return middle;
        }
    }

    return -1;

}


console.log("Search Position ", binarySearch([1, 3, 4, 5, 6, 7, 8, 9, 33, 45], 9));