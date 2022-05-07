// javascript in-built search functions.
// e.g. ['a', 'b', 'c', 'd' , 'x' , 'z' ] find = d 
// indexOf("d") => 3 , includes("d") => true


// Linear Search works on unsorted data.
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}


console.log("Linear Search");
console.log(linearSearch(['a', 'b', 'c', 'd', 'x', 'z'], 'd'));
console.log(linearSearch(['a', 'b', 'c', 'd', 'm'], 'c'));
console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100));
console.log(linearSearch(['a', 'b', 'c', 'd'], 'b'));