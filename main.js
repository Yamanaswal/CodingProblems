
function getSumOfNNumbers(n) {
    return (n * (n + 1)) / 2
}

// 1. Find the missing number in the array
let find_missing = function (input) {
    let actualSum = 0

    for (let i in input) {
        actualSum += input[i];
    }

    console.log(`Actual Sum: ${actualSum}`);

    let sumOfN = getSumOfNNumbers(input.length + 1)
    console.log(`Sum Of N: ${sumOfN}`);

    return sumOfN - actualSum 
}

let random_array = [19, 14, 2, 17, 4, 12, 20, 7, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];
let actual_missing = find_missing(random_array);
console.log("actual missing is " + actual_missing);

