// Memoiation Method - For Fibonacci
function fibMemo(n, memo = []) {
    if (memo[n]) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}

console.log(fibMemo(0));
console.log(fibMemo(1));
console.log(fibMemo(10));
console.log(fibMemo(100));


function fibTable(n) {
    if (n <= 2) {
        return 1;
    }
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

// console.log(fibTable(0));
// console.log(fibTable(1));
// console.log(fibTable(10));
// console.log(fibTable(100));