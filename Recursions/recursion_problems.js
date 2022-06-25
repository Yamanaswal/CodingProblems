// Question 1: Power - 2 power of 2,3,...n

function powerCalculate(num, power) {
    // num = 3 , power = 4 => 3 * 3 * 3 * 3 = 81

    if (power === 1) {
        return num;
    }

    return num * powerCalculate(num, power - 1)

}


console.log("Power: ");
console.log(powerCalculate(3, 4));
console.log(powerCalculate(2, 10));


// Question 2: Factorial - e.g.  4 = 4 * 3 * 2 * 1 = 24

function factorial(num) {
    if (num == 1) {
        return 1;
    }

    return num * factorial(num - 1);
}


console.log("Factorial: ");
console.log(factorial(5));
console.log(factorial(4));

// Question 3: Fibonacci - e.g. 0,1,1,2,3,5,8,13,21

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log("Fibonacci: ");
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));


// Question 4: Reverse String
// e.g. str = abcdef   -> fedcba

function reverse(str) {

    if (str.length <= 1) {
        return str;
    }

    return reverse(str.slice(1)) + str[0]
}

console.log("Reverse: ");
console.log(reverse("abcdef"));
console.log(reverse("qwerty"));


// Question 5: Capitalize all words in a (non-empty) array. - High Level.

function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }

    let value = capitalizeWords(arr.slice(0, arr.length - 1));
    value.push(arr[arr.length - 1].toUpperCase());
    return value;
}


console.log("capitalizeWords output: ", capitalizeWords(["abc", "def", "xyz"]));

// Call - Stack 
// [abc,def,xyz] -> [ABC,DEF,XYZ] 
// [abc,def] -> [ABC,DEF]
// [abc] -> [ABC]

