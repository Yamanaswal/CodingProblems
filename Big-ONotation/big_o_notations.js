const { performance } = require('perf_hooks');


// Faster - By Math Formula
function addUpToFaster(n) {
    return n * (n + 1) / 2;
}


// Slower - For loop
function addUpToSlower(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}



let time1 = performance.now()

// Analyse Big-O - For Loop Method.
/* addUpToSlower(1000000000) */

// Analyse Big-O - For Math Method.
addUpToFaster(1000000000)

let time2 = performance.now()
console.log(`Time Elaspsed: ${(time2 - time1) / 1000} seconds`);


// Space - Big-O - It has O(n) space complexity
function addToArray(arr) {
    let arrNew = [1, 2, 3, 4, 5, 6]
    for (let index = 0; index < array.length; index++) {
        arrNew.push(arr[index]);
    }
    return arrNew;
}


// Arrays - Big-Os

let arr = ["Yaman", "Manish", "Sandeep", "Sundar", "Shyam", "Adam", "Astra", "Test", "User", "DataTest"]

// Add to Last Position - O(1)
arr.push("User Name at End");
console.log("1: " + arr);

// Remove From End Position - O(n)
arr.pop();
console.log("2: " + arr);

// O(n) - Remove at Start Position
arr.shift();
console.log("3: " + arr);

// O(n) - Add to Start Position
arr.unshift("User at Start");
console.log("4: " + arr);

// O(n) - Copy of part an array or whole 3 inlude and 6 is exclude
let newArr = arr.slice(3, 6)
console.log("5: " + newArr);

// O(n) - 
arr.splice()

// O(n log n) - arrange in asc or desc
arr.sort()
console.log("6: " + arr);

//and for each/map/filter etc. -> Big-O(n)



