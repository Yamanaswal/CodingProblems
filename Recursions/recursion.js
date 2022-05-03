/*
 Call Stack - Recursion
 */

function takeShower() {
    return "Showering!"
}

function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

// check call stacks
wakeUp()

// Recursion - Question 1: Countdown to k number
// e.g. 5 , output: 5 4 3 2 1   

// countDown(5)

// Recursive Version
function countDown(num) {
    if (num <= 0) {
        console.log("All done! Recursion");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// Iterative Version
// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done! Iterative");
// }


// Question 2: Sum of numbers in given range (k)
// e.g. 5 => 5+4+3+2+1 => 15

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(5));



// Question 3: Factorial - k! 
// e.g. 



function factorialRecursive(num) {
    if (num === 1) return 1;
    return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log(factorialRecursive(20));


function factorialIterative(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}


console.log(factorialIterative(30));
console.log(factorialIterative(40));
console.log(factorialIterative(5));


///* 
// Recursive Using Helper Method. */ 
// Outer call inner function.


function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));



/*
    Pure Recursion Way. - no use another method. 
 */

function collectOddValuesPure(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}

collectOddValuesPure([1, 2, 3, 4, 5])

