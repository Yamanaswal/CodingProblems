// Question 1: Power - 2 power of 2,3,...n

function powerCalculate(num, power){
    // num = 3 , power = 4 => 3 * 3 * 3 * 3 = 81

    if(power === 1){
        return num;
    }

    return num * powerCalculate(num, power - 1)

}



console.log(powerCalculate(3,4));
console.log(powerCalculate(2,10));


// Question 2: 