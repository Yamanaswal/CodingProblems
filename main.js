
// Question 1 - Find Missing Numbers. (Unsorted  Array.) 
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


// Question 2 : Even and Odd - Arrange the numbers in such a way that
// all the even numbers get the even index and odd numbers get the odd index.
// N = 6
// arr[] = {3, 1, 6, 12, 9, 8}
// index:   0  1  2  3  4  5

// arr[] = {2, 4, 6, 1, 9, 3}
// index:   0  1  2  3  4  5
//            cur pos

function reArrange(arr) {
    const length = arr.length;

    let evenPosition = 0;
    let oddPosition = 1;

    for (let i = 0; i < length; i = i + 2) {

        // Odd
        if (arr[i] % 2 !== 0) {
            if (arr[position] % 2 === 0) {
                swap(arr[i], arr[position]);
            }
        }

    }

}


// function to arrange odd and even numbers
function arrangeOddAndEven(arr, n) {
    let oddInd = 1;
    let evenInd = 0;

    while (true) {
        while (evenInd < n && arr[evenInd] % 2 == 0) {
            evenInd += 2;
        }

        while (oddInd < n && arr[oddInd] % 2 == 1) {
            oddInd += 2;
        }

        if (evenInd < n && oddInd < n) {
            let temp;
            temp = arr[evenInd];
            arr[evenInd] = arr[oddInd];
            arr[oddInd] = temp;
        }
        else
            break;
    }
}

let arr = [3, 2, 4, 1, 9, 8];
console.log(arrangeOddAndEven(arr, 6));
console.log(arr);


function findMinArray(strArr) {

    let min = strArr[0];

    for (let index = 1; index < strArr.length; index++) {
        const element = strArr[index].length;

        if (element < min.length) {
            min = strArr[index];
        }

    }

    console.log(min);
}