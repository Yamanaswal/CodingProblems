/* 
    ### Reverse words in a given string.

    Given a String S, reverse the string without reversing its individual words.
    Words are separated by dots.

    e.g. 
    Input: str = i.like.this.program.very.much
    Output: much.very.program.this.like.i
 */

function reverseWordInString(str) {

    let strArr = str.split(".");
    return reverseWord(strArr);

    // Recursive Reverse.
    function reverseWord(strArr) {
        if (strArr.length == 1) {
            return strArr[0];
        }
        return strArr[strArr.length - 1] + "." + reverseWord(strArr.slice(0, strArr.length - 1));
    }

}


/* 

    ### Longest Common Prefix in an Array.

    Given a array of N strings, find the longest common prefix among 
    all strings present in the array.

    Input:
            N = 4
            arr[] = {geeksforgeeks, geeks, geek, geezer}
    Output: gee
    Explanation: "gee" is the longest common prefix in all the given strings.

*/

function longestCommonPrefix(strArr) {

    let length = strArr.length;
    let count = 0;
    let s = "";
    let charIndex = 0;
    let letter = strArr[0].charAt(0);

    for (let index = 0; index < strArr.length; index++) {

        if (index === 0) {
            letter = strArr[index].charAt(charIndex);
        }

        let ch = strArr[index].charAt(charIndex);

        if (letter === ch) {
            s += ch;
        }

        if (index === strArr.length - 1) {
            charIndex++;
            index = -1;

            if (length === s.length) {
                count++;
                s = "";
            } else {
                break;
            }
        }

    }


    console.log(count);

    if (count === 0) {
        return -1;
    }

    return count;
}


/*
    ### Divisible by 7
    
    Input: num = "8955795758"
    Output: 1
    Explanation: 8955795758 is divisible by 7.
 
*/

