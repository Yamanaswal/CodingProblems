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