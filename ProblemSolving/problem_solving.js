// Question 1 : Given a string to find counts of characters in given string.

function charCount(str) {

    // make object return at end
    var countResult = {};

    // loop over string
    for (var i = 0; i < str.length; i++) {

          //get char every loop and convert to lowercase.
          var char = str[i].toLowerCase()

        // Use regex for letter/number only
        // if (/[a-z0-9]+$/.test(char)) {

        // if character is something like(symbol or space) don't add to count.
        if (isAlphaNumeric(char)) {
          

            // if char is a number/letter And is a key in object, add one to count
            if (countResult[char] > 0) {
                countResult[char]++;
            }

            // if char is a number/letter And not in object, add it to object and set value to 1
            else {
                countResult[char] = 1;
            }

        }

    }

    // return object at end
    return countResult
}

// Check if aplhabet and number only using asci code. (faster than regex in js)
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}



console.log(charCount("Hello World"));

console.log(charCount("Hello HI $@ World HIIIII !! !! asd %^")); 
