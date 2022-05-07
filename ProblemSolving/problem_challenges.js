// Question 1: Frequency Counter Problem - sameFrequency.
// it have same value (irrelevent to count) in Both Inputs
// e.g.
//  sameFrequency(182, 281) // true - {1: 1, 8: 1 , 2: 1} , {2: 1 , 8: 1 , 1: 1}
//  sameFrequency(34, 14)) // false
//  sameFrequency(3589578, 5879385)) // true
//  sameFrequency(22, 222)) // false


function sameFrequency(num1, num2) {

    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) {
        return false;
    }

    let countNum1 = {}
    let countNum2 = {}

    for (let i = 0; i < strNum1.length; i++) {
        //count the number of values of num1
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let i = 0; i < strNum2.length; i++) {
        //count the number of values of num2
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1
    }

    //match key value count are same or not
    for (const key in countNum1) {
        if (countNum1[key] !== countNum2[key]) {
            return false;
        }
    }

    return true;
}

console.log("SameFrequency Results: ");
console.log(sameFrequency(182, 281)); // true - {1: 1, 8: 1 , 2: 1} , {2: 1 , 8: 1 , 1: 1}
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false



// Question 2: Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// e.g.
// areThereDuplicates(1, 2, 3) //false
// areThereDuplicates(1, 2, 2) //true
// areThereDuplicates("c", "a", "t", "s", "s") //true


function areThereDuplicates(arr) {

    let countNum = {}

    for (let i = 0; i < arr.length; i++) {
        countNum[arr[i]] = (countNum[arr[i]] || 0) + 1
    }

    for (const key in countNum) {
        if (countNum[key] > 1) {
            return true;
        }
    }

    return false;
}



console.log("AreThereDuplicates Results");
console.log(areThereDuplicates([1, 2, 3])); // false
console.log(areThereDuplicates([1, 2, 2])); // true
console.log(areThereDuplicates(["c", "a", "t", "s", "s"])); // true


// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicatesMultiplePointer(args) {
    // Two pointers
    args.sort((a, b) => a > b);

    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

console.log("areThereDuplicatesMultiplePointer Results");
console.log(areThereDuplicatesMultiplePointer([1, 2, 3])); // false
console.log(areThereDuplicatesMultiplePointer([1, 2, 2])); // true
console.log(areThereDuplicatesMultiplePointer(["c", "a", "t", "s", "s"])); // true


// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
//   }


// Question 3: Multiple Pointers - averagePair
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array,
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target, but we just want the first pair.

// Example: If the given array is [1, 2, 3 , 4 ,5 , 6] and the target average is 2,
// then we want the algorithm to return true. This is because the average of 1 and 2 is 2.
// But if none of the numbers in the array can create the target average of 2, then return false.


function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}



// Question 4: Multiple Pointers - isSubsequence
// Given two strings s and t,
// check if s is a subsequence of t.
// A subsequence can be formed by deleting
// some characters in a string without changing the order of the other characters.

// Input: s = "abc", t = “ahbgdc“
// Output: true

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) { 
        return true;
     }
    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        }
        j++;
    }
    return false;
}

console.log("isSubsequence: ");
console.log(isSubsequence("abc","ahbgdc"));
// i = 0 
// abc
// j = 0



// Question 5: Sliding Window Maximum (Maximum of all subarrays of size k)
//  Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Eg: For given array A[] = {10,30,20,50,60,40,40} of size k = 2
// The maximum sum subarray would be
// sum = 50 + 60 = 100.


function maxSubarraySum(arr, num){
    if (arr.length < num) return null;

    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}



// Question 6: Given an array of positive integers,
// find the smallest subarray’s length whose sum of elements is greater than a given number k.

// Input:  {1, 2, 3, 4, 5, 6, 7, 8}, k = 20
// Output: The smallest subarray length is 3
// Explanation: The smallest subarray with sum > 20 is {6, 7, 8}




