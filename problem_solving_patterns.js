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

